async function loadGameHistory() {
    let gameHistory = [];

    try {
        const response = await fetch('/api/gamehistory');
        gameHistory = await response.json();

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

loadGameHistory();