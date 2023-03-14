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
                    child.className = "chess-square-white";
                }
                else {
                    child.style.background = this.blackBackground;
                    child.className = "chess-square-black";
                }
                if(this.pawn(i)) {
                    this.insertPawn(child, i);
                }
                else if(this.rook(i, j)) {
                    this.insertRook(child, i);
                }
                else if(this.knight(i,j)) {
                    this.insertKnight(child, i);
                }
                else if(this.bishop(i,j)) {
                    this.insertBishop(child, i);
                }
                else if(this.queen(i,j)) {
                    this.insertQueen(child, i);
                }
                else if(this.king(i,j)) {
                    this.insertKing(child, i);
                }
                this.board.appendChild(child);
            }
        }
        this.innerChessBoard = document.getElementById("chessboard").childNodes;
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

    insertPawn(child, i) {
        let pawn = document.createElement("div");
        if(i === 1) {
            pawn.className = "pawn-white";
            pawn.id = "piece-white";
        }
        else if(i === 6) {
            pawn.className = "pawn-black";
            pawn.id = "piece-black";
        }
        pawn.textContent = "♟";
        child.appendChild(pawn);
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

    insertRook(child, i) {
        let rook = document.createElement("div");
        if(i === 0) {
            rook.className = "rook-white";
            rook.id = "piece-white";
        }
        else {
            rook.className = "rook-black";
            rook.id = "piece-black";
        }
        rook.textContent = "♜";
        child.appendChild(rook);
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

    insertKnight(child, i) {
        let knight = document.createElement("div");
        if(i === 0) {
            knight.className = "knight-white";
            knight.id = "piece-white";
        }
        else {
            knight.className = "knight-black";
            knight.id = "piece-black";
        }
        knight.textContent = "♞";
        child.appendChild(knight);
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

    insertBishop(child, i) {
        let bishop = document.createElement("div");
        if(i === 0) {
            bishop.className = "bishop-white";
            bishop.id = "piece-white";
        }
        else {
            bishop.className = "bishop-black";
            bishop.id = "piece-black";
        }
        bishop.textContent = "♝";
        child.appendChild(bishop);
    }

    queen(i,j) {
        if(i === 0 && j === 4) {
            return true;
        }
        else if(i === 7 && j === 4) {
            return true;
        }
    }

    insertQueen(child, i) {
        let queen = document.createElement("div");
        if(i === 0) {
            queen.className = "queen-white";
            queen.id = "piece-white";
        }
        else {
            queen.className = "queen-black";
            queen.id = "piece-black";
        }
        queen.textContent = "♛";
        child.appendChild(queen);
    }

    insertQueenSpecial(piece, color) {
        piece.childNodes[2].remove();
        let queen = document.createElement("div");
        if(color === "white") {
            queen.className = "queen-white";
            queen.id = "piece-white";
        }
        else {
            queen.className = "queen-black";
            queen.id = "piece-black";
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

    insertKing(child, i) {
        let king = document.createElement("div");
        if(i === 0) {
            king.className = "king-white";
            king.id = "piece-white";
        }
        else {
            king.className = "king-black";
            king.id = "piece-black";
        }
        king.textContent = "♔";
        child.appendChild(king);
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
                let className = piece.childNodes[2].className;
                this.activePiece = piece;
                if(className.indexOf("pawn") != -1) {
                    this.makePawnPath(piece);
                }
                else if(className.indexOf("rook") != -1) {
                    this.makeRookPath(piece, className);
                }
                else if(className.indexOf("knight") != -1) {
                    this.makeKnightPath(piece, className);
                }
                else if(className.indexOf("bishop") != -1) {
                    this.makeBishopPath(piece, className);
                }
                else if(className.indexOf("queen") != -1) {
                    this.makeQueenPath(piece, className);
                }
            }
            else if(piece.style.background === this.blackActive) {
                this.determinePathRemoval();
                for(let i = 0; i < this.currentMarkedTargets.length; i++) {
                    this.makeSquareOriginalColor(this.currentMarkedTargets[i]);
                }
                this.currentMarkedTargets = [];
                this.allowPlayer = true;
                piece.style.background = this.blackBackground;
                this.activePiece = null;
            }
            else if(piece.style.background === this.whiteActive) {
                this.determinePathRemoval();
                for(let i = 0; i < this.currentMarkedTargets.length; i++) {
                    this.makeSquareOriginalColor(this.currentMarkedTargets[i]);
                }
                this.currentMarkedTargets = [];
                this.allowPlayer = true;
                piece.style.background = this.whiteBackground;
                this.activePiece == null;
            }
            else if(piece.childNodes[2].className === "path-circle") {
                this.determinePathRemoval();
                piece.appendChild(this.activePiece.childNodes[2]);
                if(this.getPieceColor(piece) === "white") {
                    if(parseInt(piece.childNodes[0].textContent) === 7 && this.getPieceType(piece) === "pawn") {
                        this.insertQueenSpecial(piece, "white");
                    } 
                }
                else {
                    if(parseInt(piece.childNodes[0].textContent) === 0 && this.getPieceType(piece) === "pawn") {
                        this.insertQueenSpecial(piece, "black");
                    } 
                }
                this.allowPlayer = true;
                if(this.activePiece.style.background === this.blackActive) {
                    this.activePiece.style.background = this.blackBackground;
                }
                else if(this.activePiece.style.background === this.whiteActive) {
                    this.activePiece.style.background = this.whiteBackground;
                }
                for(let i = 0; i < this.currentMarkedTargets.length; i++) {
                    this.makeSquareOriginalColor(this.currentMarkedTargets[i]);
                }
                this.currentMarkedTargets = [];
                this.activePiece == null;
            }
            else if(piece.style.background === this.markTarget) {
                this.determinePathRemoval();
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

    determinePathRemoval() {
        for(let i = 0; i < this.currentPathNodes.length; i++) {
            this.currentPathNodes[i].childNodes[2].remove();
        }
        this.currentPathNodes = [];
    }

    determineTargetRemoval() {
        for(let i = 0; i < this.currentMarkedTargets.length; i++) {
            this.currentMarkedTargets[i].childNodes[2].remove();
        }
        this.currentMarkedTargets = [];
    }

    makePawnPath(piece) {
        let children = piece.childNodes;
        let i = parseInt(children[0].textContent);
        let j = parseInt(children[1].textContent);
        if(children[2].className.indexOf("pawn-white") != -1) {
            if(i < 7) {
                this.findPawnAttacks(i,j, "-white");
                let result = this.findAndInsertPawnPath(i + 1, j);
                if((i < 6) && result != null && i === 1) {
                    this.findAndInsertPawnPath(i + 2, j);
                }
            }
        }
        else if(children[2].className.indexOf("pawn-black") != -1) {
            if(i > 1) {
                this.findPawnAttacks(i-2, j, "-black");
                let result = this.findAndInsertPawnPath(i - 1, j);
                if((i > 2) && result != null && i === 6) {
                    this.findAndInsertPawnPath(i - 2, j);
                }
            }
        }
    }

    findAndInsertPawnPath(i, j) {
        let index = i * 8 + j;
        let currResult = this.innerChessBoard[index + 1];
        if(currResult.childNodes.length <= 2) {
            this.insertPathElement(currResult);
            return currResult;
        }
        else {return null;}
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

    makeRookPath(piece, className) {
        let rookI = parseInt(piece.childNodes[0].textContent);
        let rookJ = parseInt(piece.childNodes[1].textContent);
        let color = className.substring(className.indexOf("-") + 1);
        this.rookPath("up", color, rookI, rookJ);
        this.rookPath("down", color, rookI, rookJ);
        this.rookPath("right", color, rookI, rookJ);
        this.rookPath("left", color, rookI, rookJ);
    }

    rookEquation(direction, rookI, rookJ) {
        if(direction === "up") {
            return (rookI - 1) * 8 + rookJ + 1;
        }
        else if(direction === "down") {
            return (rookI + 1) * 8 + rookJ + 1;
        }
        else if(direction === "left") {
            return rookI * 8 + rookJ;
        }
        else {
            return rookI * 8 + rookJ + 2;
        }
    }

    rookPath(direction, color, rookI, rookJ) {
        let truth = true;
        let index = 0;
        while(truth) {
            if(rookJ === 7 && direction === "right") {
                break;
            }
            else if(rookJ === 0 && direction === "left") {
                break;
            }
            else if(rookI === 7 && direction === "down") {
                break;
            }
            else if(rookI === 0 && direction === "up") {
                break;
            }
            index = this.rookEquation(direction, rookI, rookJ);
            if(index < 1 || index > 65) {
                break;
            }
            let currNode = this.innerChessBoard[index];
            if(currNode.childNodes.length === 3) {
                if(this.getPieceColor(currNode) != color) {
                    currNode.style.background = this.markTarget;
                    this.currentMarkedTargets.push(currNode);
                }
                truth = false;
            } 
            else {
                this.insertPathElement(currNode);
                if(direction === "down") {
                    rookI += 1;
                }
                else if(direction === "up") {
                    rookI -= 1;
                }
                else if(direction === "right") {
                    rookJ += 1;
                }
                else if(direction === "left") {
                    rookJ -= 1;
                }
            }
        }
    }
    
    getPieceColor(currNode) {
        if(currNode.childNodes.length > 2) {
            return currNode.childNodes[2].className.substring(currNode.childNodes[2].className.indexOf("-") + 1);
        }
    }

    getPieceType(currNode) {
        if(currNode.childNodes.length > 2) {
            return currNode.childNodes[2].className.substring(0, currNode.childNodes[2].className.indexOf("-"));
        }
    }

    makeKnightPath(piece, className) {
        let knightI = parseInt(piece.childNodes[0].textContent);
        let knightJ = parseInt(piece.childNodes[1].textContent);
        let color = className.substring(className.indexOf("-") + 1);
        this.knightPath("up", color, knightI, knightJ);
        this.knightPath("down", color, knightI, knightJ);
        this.knightPath("right", color, knightI, knightJ);
        this.knightPath("left", color, knightI, knightJ);
    }

    knightPath(direction, color, knightI, knightJ) {
        let truth = true;
        let index = 0;
        if(this.withinTwoOfBorder(direction, knightI, knightJ)) {
            let firstIndex = this.knightFirstIndex(direction, knightI, knightJ);
            let secondIndex = this.knightSecondIndex(direction, knightI, knightJ);
            if(firstIndex > 0 && firstIndex < 65) {
                let currNode = this.innerChessBoard[firstIndex];
                if(currNode.childNodes.length === 3) {
                    if(this.getPieceColor(currNode) != color) {
                        currNode.style.background = this.markTarget;
                        this.currentMarkedTargets.push(currNode);
                    }
                } 
                else{
                    this.insertPathElement(currNode);
                }
            }
            if(secondIndex > 1 && secondIndex < 65) {
                let currNode = this.innerChessBoard[secondIndex];
                if(currNode.childNodes.length === 3) {
                    if(this.getPieceColor(currNode) != color) {
                        currNode.style.background = this.markTarget;
                        this.currentMarkedTargets.push(currNode);
                    }
                } 
                else{
                    this.insertPathElement(currNode);
                }
            }
            truth = false;
        }
    }

    withinTwoOfBorder(direction, knightI, knightJ) {
        if(direction === "left") {
            return knightJ > 1;
        }
        else if(direction === "right") {
            return knightJ < 6;
        }
        else if(direction === "up") {
            return knightI > 1;
        }
        else if(direction === "down") {
            return knightI < 6;
        }
    }

    knightFirstIndex(direction, knightI, knightJ) {
        if(direction === "left") {
            return (knightI + 1) * 8 + knightJ - 1;
        }
        else if(direction === "right") {
            return (knightI - 1) * 8 + knightJ + 3;
        }
        else if(direction === "up") {
            let returnNumber = (knightI - 2) * 8 + knightJ;
            let returnNumberJ = (returnNumber % 8);
            if(returnNumberJ === 0) {
                returnNumberJ = 8;
            }
            returnNumberJ--;
            let returnNumberI = (returnNumber - returnNumberJ) / 8;
            if(Math.round(returnNumberI) === knightI - 2) {
                return returnNumber
            }
            else {
                return -1;
            }
        }
        else if(direction === "down") {
            let returnNumber = (knightI + 2) * 8 + knightJ + 2;
            let returnNumberJ = returnNumber % 8;
            if(returnNumberJ === 0) {
                returnNumberJ = 8;
            }
            returnNumberJ--;
            let returnNumberI = (returnNumber - returnNumberJ) / 8;
            if(Math.round(returnNumberI) === knightI + 2) {
                return returnNumber;
            }
            else {
                return -1;
            }
        }
    }


    knightSecondIndex(direction, knightI, knightJ) {
        if(direction === "left") {
            return (knightI - 1) * 8 + knightJ - 1;
        }
        else if(direction === "right") {
            return (knightI + 1) * 8 + knightJ + 3;
        }
        else if(direction === "up") {
            let returnNumber = (knightI - 2) * 8 + knightJ + 2;
            let returnNumberJ = returnNumber % 8;
            if(returnNumberJ === 0) {
                returnNumberJ = 8;
            }
            returnNumberJ--;
            let returnNumberI = (returnNumber - returnNumberJ) / 8;
            if(Math.round(returnNumberI) === knightI - 2) {
                return returnNumber;
            }
            else {
                return -1;
            }
        }
        else if(direction === "down") {
            let returnNumber = (knightI + 2) * 8 + knightJ;
            let returnNumberJ = returnNumber % 8;
            if(returnNumberJ === 0) {
                returnNumberJ = 8;
            }
            returnNumberJ--;
            let returnNumberI = (returnNumber - returnNumberJ) / 8;
            if(Math.round(returnNumberI) === knightI + 2) {
                return returnNumber;
            }
            else {
                return -1;
            }
        }
    }

    insertPathElement(currNode) {
        if(currNode.childNodes.length === 2) {
            let innerCircle = document.createElement("div");
            innerCircle.className = "path-circle";
            innerCircle.textContent = "◍";
            currNode.appendChild(innerCircle);
            this.currentPathNodes.push(currNode);
        }
    }

    makeBishopPath(piece, className) {
        let bishopI = parseInt(piece.childNodes[0].textContent);
        let bishopJ = parseInt(piece.childNodes[1].textContent);
        let color = className.substring(className.indexOf("-") + 1);
        this.bishopPath("up-left", color, bishopI, bishopJ);
        this.bishopPath("up-right", color, bishopI, bishopJ);
        this.bishopPath("down-left", color, bishopI, bishopJ);
        this.bishopPath("down-right", color, bishopI, bishopJ);
    }

    bishopPath(direction, color, bishopI, bishopJ) {
        let truth = true;
        let index = 0;
        while(truth) {
            if(bishopJ === 0 && direction === "up-left") {
                break;
            }
            else if(bishopJ === 0 && direction === "down-left") {
                break;
            }
            else if(bishopJ === 7 && direction === "up-right") {
                break;
            }
            else if(bishopJ === 7 && direction === "down-right") {
                break;
            }
            index = this.bishopEquation(direction, bishopI, bishopJ);
            if(index < 1 || index > 65) {
                break;
            }
            let currNode = this.innerChessBoard[index];
            if(currNode.childNodes.length === 3) {
                if(this.getPieceColor(currNode) != color) {
                    currNode.style.background = this.markTarget;
                    this.currentMarkedTargets.push(currNode);
                }
                truth = false;
            } 
            else {
                this.insertPathElement(currNode);
                if(direction === "up-left") {
                    bishopI -= 1;
                    bishopJ -= 1;
                }
                else if(direction === "down-left") {
                    bishopI += 1;
                    bishopJ -= 1;
                }
                else if(direction === "up-right") {
                    bishopI -= 1;
                    bishopJ += 1;
                }
                else if(direction === "down-right") {
                    bishopI += 1;
                    bishopJ += 1;
                }
            }
        }
    }

    bishopEquation(direction, i, j) {
        if(direction === "up-left") {
            return (i-1) * 8 + (j);
        }
        else if(direction === "down-left") {
            return (i + 1) * 8 + (j);
        }
        else if(direction === "up-right") {
            return (i-1) * 8 + (j + 2);
        }
        else if(direction === "down-right") {
            return (i + 1) * 8 + (j + 2);
        }
    }

    makeQueenPath(piece, className) {
        this.makeRookPath(piece, className);
        this.makeBishopPath(piece, className);
    }
}

let chessboard;

document.addEventListener("DOMContentLoaded", chessboard = new ChessBoard());