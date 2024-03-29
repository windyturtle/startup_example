async function loadGameHistory() {
    let gameHistory = [];

    try {
        const response = await fetch('/api/gamehistory');
        
        gameHistory = await response.json();

        let newHistory = [];

        for(let i = gameHistory.length - 1; i >= 0; i--) {
            newHistory.push(gameHistory[i]);
        }

        gameHistory = newHistory;
        gameHistory.length = 10;

        localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    } catch {
        const gameHistoryText = localStorage.getItem('gameHistory');
        if(gameHistoryText) {
            gameHistory = JSON.parse(gameHistoryText);
        }
    }

    displayGameHistory(gameHistory);
}

function displayGameHistory(gameHistory) {
    const tableBody = document.querySelector('#gamehistory');

    if(gameHistory.length) {
        for (const [i, history] of gameHistory.entries()) {
            const position = document.createElement('td');
            const firstUser = document.createElement('td');
            const secondUser = document.createElement('td');
            const winner = document.createElement('td');
      
            position.textContent = i + 1;
            firstUser.textContent = history.firstUser;
            secondUser.textContent = history.secondUser;
            winner.textContent = history.winner;
      
            const rowEl = document.createElement('tr');
            rowEl.appendChild(position);
            rowEl.appendChild(firstUser);
            rowEl.appendChild(secondUser);
            rowEl.appendChild(winner);
      
            tableBody.appendChild(rowEl);
        }
    } else {
        tableBody.innerHTML = '<tr><td colSpan = 4>Play some games!</td></tr>';
    }
}

function callService(url, displayCallback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayCallback(data);
        });
}

function displayQuote(data) {
    const container = document.querySelector("#quote");

    const quote = document.createElement("p");
    quote.classList.add("quote");

    quote.textContent = data.content;

    container.appendChild(quote);
}

loadGameHistory();
callService("https://api.quotable.io/random", displayQuote);