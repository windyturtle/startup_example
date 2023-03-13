let gameHistory = [];

class ChessBoard {
    allowPlayer;
    innerChessBoard = [];
    activePiece;

    constructor() {
        this.board = this.makeBoard();
        this.allowPlayer = true;
    }

    makeBoard() {
        this.board = document.getElementById("chessboard");
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                let child = document.createElement("div");
                child.className = "chess-square";
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
                    child.style.background = "hsl(0,0%,25%)";
                    child.className = "chess-square-black";
                }
                else {
                    child.style.background = "hsla(0,0%,100%,.50)";
                    child.className = "chess-square-white";
                }
                if(i === 1 || i === 6) {
                    child.className += "-pawn";

                    let pawn = document.createElement("div");
                    if(i === 1) {
                        pawn.className = "pawn-white";
                    }
                    else if(i === 6) {
                        pawn.className = "pawn-black";
                    }
                    pawn.textContent = "♟";
                    child.appendChild(pawn);
                }
                this.board.appendChild(child);
            }
        }
        this.innerChessBoard = document.getElementById("chessboard").childNodes;
    }

    pickUp(piece) {
        if(piece.childNodes.length > 2) {
            if(this.allowPlayer) {
                this.allowPlayer = false;
                if(piece.className.indexOf("chess-square-black") != -1) {
                    piece.style.background = "hsl(156, 37%, 25%)";
                }
                else if(piece.className.indexOf("chess-square-white") != -1) {
                    piece.style.background = "hsl(156, 37%, 20%)";
                }
                if(piece.className.indexOf("pawn") != -1) {
                    this.makePawnPath(piece);
                    this.activePiece = piece;
                }
            }
            else if(piece.style.background === "rgb(40, 87, 68)") {
                this.determinePathRemoval(piece);
                this.allowPlayer = true;
                piece.style.background = "hsl(0,0%,25%)"
                this.activePiece = null;
            }
            else if(piece.style.background === "rgb(32, 70, 55)") {
                this.determinePathRemoval(piece);
                this.allowPlayer = true;
                piece.style.background = "hsla(0,0%,100%,.50)";
                this.activePiece == null;
            }
            else if(piece.childNodes[2].className === "path-circle") {
                this.determinePathRemoval(this.activePiece);
                let classNameOfItem = this.activePiece.childNodes[2].className;
                let classNameWithoutDescription = classNameOfItem.substring(0, classNameOfItem.indexOf("-"));
                piece.appendChild(this.activePiece.childNodes[2]);
                this.activePiece.className = this.activePiece.className.substring(0,this.activePiece.className.indexOf(classNameWithoutDescription) - 1);
                piece.className += "-" + classNameWithoutDescription;
                this.allowPlayer = true;
                if(this.activePiece.style.background === "rgb(40, 87, 68)") {
                    this.activePiece.style.background = "hsl(0,0%,25%)";
                }
                else if(this.activePiece.style.background === "rgb(32, 70, 55)") {
                    this.activePiece.style.background = "hsla(0,0%,100%,.50)";
                }
                    this.activePiece == null;
            }
        }
    }

    determinePathRemoval(piece) {
        let children = piece.childNodes;
        let i = parseInt(children[0].textContent);
        let j = parseInt(children[1].textContent);
        if(children[2].className.indexOf("pawn") != -1) {
            if(children[2].className.indexOf("pawn-white") != -1) {
                this.findAndRemovePawnPath(i, j);
            }
            else {
                this.findAndRemovePawnPath(i - 3, j);
            }
        }
    }

    makePawnPath(piece) {
        let children = piece.childNodes;
        let i = parseInt(children[0].textContent);
        let j = parseInt(children[1].textContent);
        if(children[2].className.indexOf("pawn-white") != -1) {
            if(i < 7) {
                let result = this.findAndInsertPath(i + 1, j);
                if((i < 6) && result != null) {
                    this.findAndInsertPath(i + 2, j);
                }
            }
        }
        else if(children[2].className.indexOf("pawn-black") != -1) {
            if(i > 1) {
                let result = this.findAndInsertPath(i - 1, j);
                if((i > 2) && result != null) {
                    this.findAndInsertPath(i - 2, j);
                }
            }
        }
    }

    findAndInsertPath(i, j) {
        let index = i * 8 + j;
        let currResult = this.innerChessBoard[index + 1];
        if(currResult.childNodes.length <= 2) {
            let innerCircle = document.createElement("div");
            innerCircle.className = "path-circle";
            innerCircle.textContent = "◍";
            currResult.appendChild(innerCircle);
            return currResult;
        }
        else {return null;}
    }

    findAndRemovePawnPath(i,j) {
        let index = (i + 1) * 8 + j;
        let secondIndex = (i + 2) * 8 + j
        let currResult = this.innerChessBoard[index + 1];
        let innerCircle;
        if(currResult.childNodes.length > 2) {
            innerCircle = currResult.childNodes[2];
            if(innerCircle.className === "path-circle") {
                innerCircle.remove();
            }
        }
        currResult = this.innerChessBoard[secondIndex + 1];
        if(currResult.childNodes.length > 2) {
            innerCircle = currResult.childNodes[2];
            if(innerCircle.className === "path-circle") {
                innerCircle.remove();
            }
        }
    }
}

let chessboard;

document.addEventListener("DOMContentLoaded", chessboard = new ChessBoard());