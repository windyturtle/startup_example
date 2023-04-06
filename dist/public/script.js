let chessboard;

class ChessBoard {
    innerChessBoard = []; //a 2d array of the chess pieces
    activePiece = null; //The current piece that is showing its path
    whiteBackground = "hsla(0,0%,100%,.50)";
    blackBackground = "hsl(0,0%,25%)";
    whiteActive = "rgb(32, 70, 55)";
    blackActive = "rgb(40, 87, 68)";
    markTarget = "rgba(200, 245, 0, 0.67)"; //Color of the tile on which targets of the active piece are set to
    currentMarkedTargets = []; //List of targets on the "markTarget" color
    currentPathNodes = []; //List of the tiles with path nodes
    whiteWin = false;
    blackWin = false;
    blackTurn = false;
    whiteTurn = true;
    kingIsInCheck = false;
    whiteKingI = 7;
    whiteKingJ = 3;
    blackKingI = 0;
    blackKingJ = 3;
    whiteString = "white";
    blackString = "black";
    chessSquareWhite = "chess-square-white";
    chessSquareBlack = "chess-square-black";
    pawnString = "pawn";
    rookString = "rook";
    knightString = "knight";
    bishopString = "bishop";
    queenString = "queen";
    kingString = "king";
    hyphenString = "-";
    pawnTextContent = "♟";
    rookTextContent = "♜";
    knightTextContent = "♞";
    bishopTextContent = "♝";
    queenTextContent = "♛";
    kingTextContent = "♔";
    currPlayerUsername = "";

    constructor() {
        this.board = this.makeBoard();
    }

    makeBoard() {
        this.currPlayerUsername = localStorage.getItem("userName");
        document.getElementById("username").textContent = this.currPlayerUsername;
        this.board = document.getElementById("chessboard");
        for(let i = 0; i < 8; i++) {
            this.innerChessBoard[i] = [];
            for(let j = 0; j < 8; j++) {
                let child = document.createElement("div");
                child.setAttribute("onclick", "chessboard.pickUp(this);");
                child.onclick = function() { chessboard.pickUp(this); };
                let variable = document.createElement("var");
                variable.id = "i";
                variable.textContent = i;
                child.appendChild(variable);
                let otherVariable = document.createElement("var");
                otherVariable.textContent = j;
                otherVariable.id = "j"
                child.appendChild(otherVariable);
                if((i + j) % 2 === 0) {
                    child.style.background = this.whiteBackground;
                    child.className = this.chessSquareWhite;
                }
                else {
                    child.style.background = this.blackBackground;
                    child.className = this.chessSquareBlack;
                }
                if(this.pawn(i)) {
                    this.insertPiece(child, i, this.pawnString, this.pawnTextContent);
                }
                else if(this.rook(i, j)) {
                    this.insertPiece(child, i, this.rookString, this.rookTextContent);
                }
                else if(this.knight(i,j)) {
                    this.insertPiece(child, i, this.knightString, this.knightTextContent);
                }
                else if(this.bishop(i,j)) {
                    this.insertPiece(child, i, this.bishopString, this.bishopTextContent);
                }
                else if(this.queen(i,j)) {
                    this.insertPiece(child, i, this.queenString, this.queenTextContent);
                }
                else if(this.king(i,j)) {
                    this.insertPiece(child, i, this.kingString, this.kingTextContent);
                }
                this.board.appendChild(child);
                this.innerChessBoard[i][j] = child;
            }
        }
    }

    insertPiece(child, i, pieceType, pieceTextContent) {
        let piece = document.createElement("div");
        piece.className = pieceType;
        if(i === 7 || i === 6) {
            piece.id = this.whiteString;
        }
        else {
            piece.id = this.blackString;
        }
        piece.textContent = pieceTextContent;
        child.appendChild(piece);
    }
    
    pawn(i) {
        if(i === 1) {
            return true;
        }
        else if(i === 6) {
            return true;
        }
        else {
            return false;
        }
    }

    rook(i, j) {
        if(i === 0 && j === 0) {
            return true;
        }
        else if(i === 0 && j === 7) {
            return true;
        }
        else if(i === 7 && j === 0) {
            return true;
        }
        else if(i === 7 && j === 7) {
            return true;
        }
        else {
            return false;
        }
    }

    knight(i, j) {
        if(i === 0 && j === 1) {
            return true;
        }
        else if(i === 0 && j === 6) {
            return true;
        }
        else if(i === 7 && j === 1) {
            return true;
        }
        else if(i === 7 && j === 6) {
            return true;
        }
        else {
            return false;
        }
    }
    
    bishop(i,j) {
        if(i === 0 && j === 2) {
            return true;
        }
        else if(i === 0 && j === 5) {
            return true;
        }
        else if(i === 7 && j === 2) {
            return true;
        }
        else if(i === 7 && j === 5) {
            return true;
        }
        else {
            return false;
        }
    }

    queen(i,j) {
        if(i === 0 && j === 4) {
            return true;
        }
        else if(i === 7 && j === 4) {
            return true;
        }
    }


    insertQueenSpecial(piece, color) {
        if(piece.childNodes.length > 2) {
            piece.childNodes[2].remove();
        }
        this.activePiece.childNodes[2].remove();
        let queen = document.createElement("div");
        queen.className = this.queenString;
        if(color === this.whiteString) {
            queen.id = this.whiteString;
        }
        else {
            queen.id = this.blackString;
        }
        queen.textContent = "♛";
        piece.appendChild(queen);
    }

    king(i,j) {
        if(i === 0 && j === 3) {
            return true;
        }
        else if(i === 7 && j === 3) {
            return true;
        }
    }

    async pickUp(piece) {
        if(piece === null) {
            this.displayWinMessage();
            return;
        }
        if(this.whiteWin || this.blackWin) {
            return;
        }
        let pieceColor;
        if(piece.childNodes.length === 3 && this.activePiece === null) {
            pieceColor = piece.childNodes[2].id;
        }
        else if(this.activePiece != null && piece.childNodes.length === 3) {
            pieceColor = this.activePiece.childNodes[2].id;
        }
        else {
            pieceColor = "";
        }
        if(pieceColor != "") { //Fails if the selected piece doesnt have a third child node
            let correctPlayerTurn = this.correctPlayerTurn(pieceColor);
            if(correctPlayerTurn) {
                let pieceType = piece.childNodes[2].className;
                if(pieceType === "path-circle") {
                    pieceType = this.activePiece.childNodes[2].className;
                }
                let i = parseInt(piece.childNodes[0].textContent);
                let j = parseInt(piece.childNodes[1].textContent);
                if(this.whiteTurn && !this.kingIsInCheck) {
                    this.kingSimulation(this.whiteKingI, this.whiteKingJ, pieceColor); //Checks if the King is in check
                }
                else if(!this.kingIsInCheck) {
                    this.kingSimulation(this.blackKingI, this.blackKingJ, pieceColor); //Checks if the King is in check
                }
                if(this.kingIsInCheck) {
                    let currColor = this.whiteTurn ? "white" : "black";
                    document.getElementById("king-in-check").textContent = "The " + currColor + " king is in check";
                }
                if(this.activePiece === null) {
                    this.selectPiece(piece, pieceColor, pieceType, i, j); //marks the piece as selected and makes path
                }
                else if(piece === this.activePiece) { //If the active piece is selected
                    this.setAsUnactive(this.activePiece);
                    this.removePathNodes();
                    this.removeTargets();
                }
                else if(this.in(piece, this.currentPathNodes)) {
                    this.removePathNodes();
                    piece.appendChild(this.activePiece.childNodes[2]);
                    if(pieceType == "king") {
                        this.updateKingLocation(i, j, pieceColor);
                    }
                    if(!this.checkKingCheckAfterMove(piece, pieceColor)) {
                        return;
                    }
                    document.getElementById("king-in-check").textContent = "";
                    this.setAsUnactive(this.activePiece);
                    this.changeTurns();
                    this.removeTargets();
                }
                else if(this.in(piece, this.currentMarkedTargets)) {
                    let copyOfChessPiece = this.copyChessPiece(piece.childNodes[2]);
                    piece.childNodes[2].remove();
                    piece.appendChild(this.activePiece.childNodes[2]);
                    if(pieceType == "king") {
                        this.updateKingLocation(i, j, pieceColor);
                    }
                    if(this.kingIsInCheck && !this.checkKingCheckAfterMove(piece, pieceColor)) {
                        piece.appendChild(copyOfChessPiece);
                        return;
                    }
                    document.getElementById("king-in-check").textContent = "";
                    this.setAsUnactive(this.activePiece);
                    this.removeTargets();
                    this.removePathNodes();
                    this.changeTurns();
                }
            }
        }
    }


    displayWinMessage() {
        if(this.whiteTurn && this.kingIsInCheck) {
            document.getElementById("king-in-check").textContent = "Black Wins!";
            this.blackWin = true;
        }
        else if(this.kingIsInCheck) {
            document.getElementById("king-in-check").textContent = "White Wins!";
            this.whiteWin = true;
        }
    }

    checkKingCheckAfterMove(piece, pieceColor) { //Returns false if King is still in check after moving piece, returns true if not

        if(this.whiteTurn) {
            this.kingSimulation(this.whiteKingI, this.whiteKingJ, pieceColor);
        }
        else {
            this.kingSimulation(this.blackKingI, this.blackKingJ, pieceColor);
        }
        if(this.kingIsInCheck) {
            this.activePiece.appendChild(piece.childNodes[2]);
            this.setAsUnactive(this.activePiece);
            this.removeTargets();
            this.removePathNodes();
            return false;
        }
        return true;
    }


    copyChessPiece(previousPiece) {
        let copyPiece = document.createElement(previousPiece.className);
        if(previousPiece.id === this.whiteString) {
            copyPiece.id = this.whiteString;
        }
        else if(previousPiece.id === this.blackString) {
            copyPiece.id = this.blackString;
        }
        copyPiece.textContent = previousPiece.textContent;
        return copyPiece;
    }

    changeTurns() {
        this.whiteTurn = this.whiteTurn ? false : true;
        this.blackTurn = this.blackTurn ? false : true;
    }

    correctPlayerTurn(pieceColor) {
        let correctPlayerTurn = false;
        if(pieceColor === this.whiteString && this.whiteTurn) {
            correctPlayerTurn = true;
        }
        else if(pieceColor === this.blackString && this.blackTurn) {
            correctPlayerTurn = true;
        }
        return correctPlayerTurn;
    }

    selectPiece(piece, pieceColor, pieceType, i, j) {
        this.activePiece = piece;
        this.setAsActive(piece);
        this.makePath(pieceType, pieceColor, i, j);
    }

    in(piece, pieceHolder) {
        for(let i = 0; i < pieceHolder.length; i++) {
            if(piece === pieceHolder[i]) {
                return true;
            }
        }
        return false;
    }

    setAsActive(piece) {
        if(piece.className === this.chessSquareWhite) {
            piece.style.background = this.whiteActive;
        }
        else if(piece.className === this.chessSquareBlack) {
            piece.style.background = this.blackActive;
        }
    }

    setAsUnactive(piece) {
        if(piece.className === this.chessSquareWhite) {
            piece.style.background = this.whiteBackground;
        }
        else if(piece.className === this.chessSquareBlack) {
            piece.style.background = this.blackBackground;
        }
        this.activePiece = null;
    }

    removePathNodes() {
        for(let i = 0; i < this.currentPathNodes.length; i++) {
            this.currentPathNodes[i].childNodes[2].remove();
        }
        this.currentPathNodes = [];
    }

    removeTargets() {
        for(let i = 0; i < this.currentMarkedTargets.length; i++) {
            if(this.currentMarkedTargets[i].className === this.chessSquareWhite) {
                this.currentMarkedTargets[i].style.background = this.whiteBackground;
            }
            else {
                this.currentMarkedTargets[i].style.background = this.blackBackground;
            }
        }
        this.currentMarkedTargets = [];
    }

    makePath(pieceType, pieceColor, i, j) {
        if(pieceType === this.pawnString) {
            this.pawnPath(pieceColor, i, j, false);
        }
        else if(pieceType === this.rookString) {
            this.rookPath(pieceColor, i, j, false);
        }
        else if(pieceType === this.knightString) {
            this.knightPath(pieceColor, i, j, false);
        }
        else if(pieceType === "bishop") {
            this.bishopPath(pieceColor, i, j, false);
        }
        else if(pieceType === "queen") {
            this.queenPath(pieceColor, i, j, false);
        }
        else if(pieceType === "king") {
            this.kingPath(pieceColor, i, j, false);
        }
    }

    pawnPath(pieceColor, i, j, isKingSimulation) {
        let firstIndex = pieceColor === this.blackString ? 1 : -1;
        let secondIndex = pieceColor === this.blackString ? 2 : -2;
        if(!isKingSimulation) {
            if(this.insertPathNode(this.innerChessBoard[i + firstIndex][j])) {
                if(i === 1 || i === 6) {
                    this.insertPathNode(this.innerChessBoard[i + secondIndex][j]);
                }
            }
        }
        if(j - 1 > 0) {
            this.setAndInsertTarget(this.innerChessBoard[i + firstIndex][j - 1], this.pawnString, isKingSimulation, pieceColor);
        }
        if(j + 1 < 8) {
            this.setAndInsertTarget(this.innerChessBoard[i + firstIndex][j + 1], this.pawnString, isKingSimulation, pieceColor);
        }
    }

    rookPath(pieceColor, i, j, isKingSimulation, pieceName = this.rookString) {
        let counter = 1;
        while(i + counter < 8 && this.innerChessBoard[i + counter][j].childNodes.length < 3) {
            if(!isKingSimulation) {
                this.insertPathNode(this.innerChessBoard[i+counter][j]);
            }
            counter++;
        }
        if(i + counter < 8) {
            this.setAndInsertTarget(this.innerChessBoard[i+counter][j], pieceName, isKingSimulation, pieceColor);
        }
        counter = -1;
        while(i + counter >= 0 && this.innerChessBoard[i + counter][j].childNodes.length < 3) {
            if(!isKingSimulation) {
                this.insertPathNode(this.innerChessBoard[i+counter][j]);
            }
            counter--;
        }
        if(i + counter >= 0) {
            this.setAndInsertTarget(this.innerChessBoard[i+counter][j], pieceName, isKingSimulation, pieceColor);
        }
        counter = 1;
        while(j + counter < 8 && this.innerChessBoard[i][j + counter].childNodes.length < 3) {
            if(!isKingSimulation) {
                this.insertPathNode(this.innerChessBoard[i][j+counter]);
            }
            counter++;
        }
        if(j + counter < 8) {
            this.setAndInsertTarget(this.innerChessBoard[i][j+counter], pieceName, isKingSimulation, pieceColor);
        }
        counter = -1;
        while( j + counter >= 0 && this.innerChessBoard[i][j + counter].childNodes.length < 3) {
            if(!isKingSimulation) {
                this.insertPathNode(this.innerChessBoard[i][j+counter]);
            }
            counter--;
        }
        if(j + counter >= 0) {
            this.setAndInsertTarget(this.innerChessBoard[i][j+counter], pieceName, isKingSimulation, pieceColor);
        }
    }

    knightPath(pieceColor, i, j, isKingSimulation) {
        let iCounter = 2;
        let jCounter = -1;
        let loopCounter = 0;
        let currSquare;
        while(loopCounter < 8) {
            if(this.withinBounds(i, j, iCounter, jCounter)) {
                currSquare = this.innerChessBoard[i + iCounter][j + jCounter];
                if(currSquare.childNodes.length === 3 && pieceColor != currSquare.childNodes[2].id) {
                    this.setAndInsertTarget(currSquare, this.knightString, isKingSimulation, pieceColor);
                }
                else if(!isKingSimulation && currSquare.childNodes.length === 2) {
                    this.insertPathNode(currSquare);
                }
            }
            if((iCounter === 2 || iCounter === -2) && loopCounter < 4) {
                if(jCounter === -1) {
                    jCounter += 2;
                }
                else {
                    jCounter -= 2;
                }
                if(loopCounter % 2 === 1) {
                    iCounter = -2;
                }
                if(loopCounter === 3) {
                    iCounter = -1;
                    jCounter = 2;
                }
            }
            else if((iCounter === -1 || iCounter === 1)) {
                if(iCounter === -1) {
                    iCounter += 2;
                }
                else {
                    iCounter -= 2;
                }
                if(loopCounter % 2 === 1) {
                    jCounter = -2;
                }
            }
            loopCounter++;
        }
    }

    bishopPath(pieceColor, i, j, isKingSimulation, pieceName = this.bishopString) {
        let iCounter = -1;
        let jCounter = -1;
        let currSquare;
        let loopCounter = 0;
        while(loopCounter < 4)  {
            while(this.withinBounds(i, j, iCounter, jCounter) && this.innerChessBoard[i + iCounter][j + jCounter].childNodes.length < 3) {
                if(!isKingSimulation) {
                    this.insertPathNode(this.innerChessBoard[i + iCounter][j + jCounter]);
                }
                if(iCounter < 0) {
                    iCounter--;
                }
                else {
                    iCounter++;
                }
                if(jCounter < 0) {
                    jCounter--;
                }
                else {
                    jCounter++;
                }
            }
            if(this.withinBounds(i, j, iCounter, jCounter) && this.innerChessBoard[i + iCounter][j + jCounter].childNodes.length === 3) {
                this.setAndInsertTarget(this.innerChessBoard[i + iCounter][j + jCounter], pieceName, isKingSimulation, pieceColor);
            }
            if(loopCounter === 0) {
                jCounter = 1;
                iCounter = -1;
            }
            else if(loopCounter === 1) {
                jCounter = -1;
                iCounter = 1;
            }
            else if(loopCounter === 2) {
                jCounter = 1;
                iCounter = 1;
            }
            loopCounter++;
        }
    }

    queenPath(pieceColor, i, j, isKingSimulation) {
        this.rookPath(pieceColor, i, j, isKingSimulation, this.queenString);
        this.bishopPath(pieceColor, i, j, isKingSimulation, this.queenString);
    }

    kingPath(pieceColor, i, j, isKingSimulation) {
        let iCounter = -1;
        let jCounter = -1;
        for(let k = 0; k < 8; k++) {
            if(this.withinBounds(i, j, iCounter, jCounter)) {
                if(this.innerChessBoard[i + iCounter][j + jCounter].childNodes.length < 3 && !isKingSimulation) {
                    this.insertPathNode(this.innerChessBoard[i + iCounter][j + jCounter]);
                }
                else if(this.innerChessBoard[i + iCounter][j + jCounter].childNodes.length === 3) {
                    this.setAndInsertTarget(this.innerChessBoard[i + iCounter][j + jCounter], this.kingString, isKingSimulation, pieceColor);
                }
            }
            if(k < 2) {
                jCounter++;
            }
            else if(k < 4) {
                iCounter++;
            }
            else if(k < 6) {
                jCounter--;
            }
            else if(k === 6) {
                iCounter--;
            }
        }
    }

    withinBounds(i, j, iCounter, jCounter) {
        return i + iCounter < 8 && j + jCounter < 8 && j + jCounter >= 0 && i + iCounter >= 0;
    }

    insertPathNode(piece) {
        if(piece.childNodes.length === 2) {
            let innerCircle = document.createElement("div");
            innerCircle.className = "path-circle";
            innerCircle.textContent = "◍";
            piece.appendChild(innerCircle);
            this.currentPathNodes.push(piece);
            return true;
        }
        return false;
    }

    setAndInsertTarget(piece, pieceType, isKingSimulation, pieceColor) {
        if(piece.childNodes.length === 3 && piece.childNodes[2].id != pieceColor && !isKingSimulation) {
            piece.style.background = this.markTarget;
            this.currentMarkedTargets.push(piece);
        }
        if(isKingSimulation && piece.childNodes.length === 3) {
            if(piece.childNodes[2].className == pieceType && piece.childNodes[2].id != pieceColor) {
                this.kingIsInCheck = true;
            }
        }
    }

    kingSimulation(i, j, pieceColor) {
        this.kingIsInCheck = false;
        if(!this.kingIsInCheck) {
            this.pawnPath(pieceColor, i, j, true);
        } 
        if(!this.kingIsInCheck) {
            this.rookPath(pieceColor, i, j, true);
        }
        if(!this.kingIsInCheck) {
            this.knightPath(pieceColor, i, j, true);
        }
        if(!this.kingIsInCheck) {
            this.bishopPath(pieceColor, i, j, true);
        }
        if(!this.kingIsInCheck) {
            this.queenPath(pieceColor, i, j, true);
        }
        if(!this.kingIsInCheck) {
            this.kingPath(pieceColor, i, j, true);
        }
    }

    updateKingLocation(i, j, pieceColor) {
        if(pieceColor == this.blackString) {
            this.blackKingI = i;
            this.blackKingJ = j;
        }
        else {
            this.whiteKingI = i;
            this.whiteKingJ = j;
        }
    }
}