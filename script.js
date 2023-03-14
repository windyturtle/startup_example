let gameHistory = [];

class ChessBoard {
    allowPlayer;
    innerChessBoard = [];
    activePiece;
    whiteBackground = "hsla(0,0%,100%,.50)";
    blackBackground = "hsl(0,0%,25%)";
    whiteActive = "rgb(32, 70, 55)";
    blackActive = "rgb(40, 87, 68)";
    markTarget = "rgba(200, 245, 0, 0.67)";
    currentMarkedTargets = [];
    currentPathNodes = [];

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
                    child.style.background = this.blackBackground;
                    child.className = "chess-square-black";
                }
                else {
                    child.style.background = this.whiteBackground;
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
                if(this.rook(i, j)) {
                    child.className += "-rook";

                    let rook = document.createElement("div");
                    if(i === 0) {
                        rook.className = "rook-white";
                    }
                    else {
                        rook.className = "rook-black";
                    }
                    rook.textContent = "♜";
                    child.appendChild(rook);
                }
                this.board.appendChild(child);
            }
        }
        this.innerChessBoard = document.getElementById("chessboard").childNodes;
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

    pickUp(piece) {
        if(piece.childNodes.length > 2) {
            if(this.allowPlayer) {
                this.allowPlayer = false;
                if(piece.className.indexOf("chess-square-black") != -1) {
                    piece.style.background = this.blackActive;
                }
                else if(piece.className.indexOf("chess-square-white") != -1) {
                    piece.style.background = this.whiteActive;
                }
                if(piece.className.indexOf("pawn") != -1) {
                    this.makePawnPath(piece);
                    this.activePiece = piece;
                }
            }
            else if(piece.style.background === this.blackActive) {
                this.determinePathRemoval(piece);
                this.allowPlayer = true;
                piece.style.background = this.blackBackground;
                this.activePiece = null;
            }
            else if(piece.style.background === this.whiteActive) {
                this.determinePathRemoval(piece);
                this.allowPlayer = true;
                piece.style.background = this.whiteBackground;
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
                if(this.activePiece.style.background === this.blackActive) {
                    this.activePiece.style.background = this.blackBackground;
                }
                else if(this.activePiece.style.background === this.whiteActive) {
                    this.activePiece.style.background = this.whiteBackground;
                }
                    this.activePiece == null;
            }
            else if(piece.style.background === this.markTarget) {
                for(let i = 0; i < this.currentMarkedTargets.length; i++) {
                    this.makeSquareOriginalColor(this.currentMarkedTargets[i]);
                }
                piece.childNodes[2].remove();
                piece.appendChild(this.activePiece.childNodes[2]);
                this.makeSquareOriginalColor(this.activePiece);
                this.activePiece = null;
                this.allowPlayer = true;
            }
        }
    }

    makeSquareOriginalColor(currNode) {
        if(currNode.className.indexOf("chess-square-black") != -1) {
            currNode.style.background = this.blackBackground;
        }
        else if(currNode.className.indexOf("chess-square-white") != -1) {
            currNode.style.background = this.whiteBackground;
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
                this.findPawnAttacks(i,j, "-white");
                let result = this.findAndInsertPawnPath(i + 1, j);
                if((i < 6) && result != null) {
                    this.findAndInsertPawnPath(i + 2, j);
                }
            }
        }
        else if(children[2].className.indexOf("pawn-black") != -1) {
            if(i > 1) {
                this.findPawnAttacks(i-2, j, "-black");
                let result = this.findAndInsertPawnPath(i - 1, j);
                if((i > 2) && result != null) {
                    this.findAndInsertPawnPath(i - 2, j);
                }
            }
        }
    }

    findAndInsertPawnPath(i, j) {
        let index = i * 8 + j;
        let currResult = this.innerChessBoard[index + 1];
        if(currResult.childNodes.length <= 2) {
            let innerCircle = document.createElement("div");
            innerCircle.className = "path-circle";
            innerCircle.textContent = "◍";
            currResult.appendChild(innerCircle);
            this.currentPathNodes.push(currResult);
            return currResult;
        }
        else {return null;}
    }

    findAndRemovePawnPath(i,j) {
        let index = (i + 1) * 8 + j;
        let secondIndex = (i + 2) * 8 + j
        let currResult = this.innerChessBoard[index + 1];
        let innerCircle;
        for(let k = 0; k < this.currentPathNodes.length; k++) {
            this.currentPathNodes[k].childNodes[2].remove();
        }
        for(let k = 0; k < this.currentMarkedTargets.length; k++) {
            let targetI = parseInt(this.currentMarkedTargets[k].childNodes[0].textContent);
            let targetJ = parseInt(this.currentMarkedTargets[k].childNodes[1].textContent);
            let targetIndex = (targetI * 8) + targetJ;
            if(targetIndex % 2 === 0 && targetI % 2 === 0) {
                this.currentMarkedTargets[k].style.background = this.blackBackground;
            }
            else if(targetIndex % 2 != 0 && targetI % 2 === 0){
                this.currentMarkedTargets[k].style.background = this.whiteBackground;
            }
            else if(targetIndex % 2 === 0 && targetI % 2 != 0) {
                this.currentMarkedTargets[k].style.background = this.whiteBackground;
            }
            else {
                this.currentMarkedTargets[k].style.background = this.blackBackground;
            }
        }
        this.currentPathNodes = [];
        this.currentMarkedTargets = [];
    }

    findPawnAttacks(i,j, attacking) {
        let index = (i + 1) * 8 + j;
        let currResult = this.innerChessBoard[index];
        if(currResult.childNodes.length === 3 && this.evaluateEquation(index, i, attacking, 0)) {
            if(currResult.childNodes[2].className.indexOf(attacking) === -1) {
                currResult.style.background = this.markTarget;
                this.currentMarkedTargets.push(currResult);
            }
        }
        currResult =  this.innerChessBoard[index + 2];
        if(currResult.childNodes.length === 3 && this.evaluateEquation(index, i, attacking, 1)) {
            if(currResult.childNodes[2].className.indexOf(attacking) === -1) {
                currResult.style.background = this.markTarget;
                this.currentMarkedTargets.push(currResult);
            }
        }
    }

    evaluateEquation(index, i, attacking, attackNumber) {
        if(attacking === "-white") {
            if(attackNumber === 0) {
                return (index/2 >= (i + 1) * 4);
            }
            else if(attackNumber === 1) {
                return ((index + 2)/2 >= (i + 1) * 4);
            }
        }
        else if(attacking === "-black") {
            if(attackNumber === 0) {
                return !(index/2 <= (i + 1) * 4);
            }
            else if(attackNumber === 1) {
                return !((index + 2)/2 <= (i + 1) * 4);
            }
        }
    }
}

let chessboard;

document.addEventListener("DOMContentLoaded", chessboard = new ChessBoard());