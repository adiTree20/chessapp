const king = '<div class="piece" id="king"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 0c17.7 0 32 14.3 32 32l0 16 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 48 152 0c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400 80 400 3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40l152 0 0-48-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-16c0-17.7 14.3-32 32-32zM38.6 473.4L80 432l288 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L54.6 512C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const queen = '<div class="piece" id="queen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM134.1 143.8c3.3-13 15-23.8 30.2-23.8c12.3 0 22.6 7.2 27.7 17c12 23.2 36.2 39 64 39s52-15.8 64-39c5.1-9.8 15.4-17 27.7-17c15.3 0 27 10.8 30.2 23.8c7 27.8 32.2 48.3 62.1 48.3c10.8 0 21-2.7 29.8-7.4c8.4-4.4 18.9-4.5 27.6 .9c13 8 17.1 25 9.2 38L399.7 400 384 400l-40.4 0-175.1 0L128 400l-15.7 0L5.4 223.6c-7.9-13-3.8-30 9.2-38c8.7-5.3 19.2-5.3 27.6-.9c8.9 4.7 19 7.4 29.8 7.4c29.9 0 55.1-20.5 62.1-48.3zM256 224s0 0 0 0s0 0 0 0s0 0 0 0zM112 432l288 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L86.6 512C74.1 512 64 501.9 64 489.4c0-6 2.4-11.8 6.6-16L112 432z"/></svg></div>';
const rook = '<div class="piece" id="rook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M32 192L32 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 144c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144L80 400 96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432l320 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L38.6 512C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const bishop = '<div class="piece" id="bishop"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7L64 400l192 0 0-27.3c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32L128 0zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512l274.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432 48 432z"/></svg></div>';
const pawn = '<div class="piece" id="pawn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400l160 0L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32l-8.5 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4z"/></svg></div>';
const knight = '<div class="piece" id="knight"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z"/></svg></div>';

const gameBoard = document.getElementById("gameboard");
const playerDisplay = document.getElementById("playerbox");
const infoDisplay = document.getElementById("info-display");
let allPossibleMoves = {}
const width = 8;

let playerGo = "black";
playerDisplay.innerHTML = "<p id='color-black'>It's <span class='bold-black'>Black</span>'s Turn!</p>";

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

function finishBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.getElementById((i+1).toString());
        square.innerHTML = startPiece;
        square.setAttribute('square-id', i+1)

        square.firstChild?.setAttribute('draggable', true)
        
        if (i <= 15) {
            square.firstChild.firstChild.classList.add("svgblack")
        }
        
        if (i >= 48) {
            square.firstChild.firstChild.classList.add("svgwhite")
        }
    });
};

finishBoard()


const allSquares = document.querySelectorAll(".square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('mouseover', mouseover)
    square.addEventListener('mouseout', mouseout);
})

let startPositionId
let draggedElement

function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.stopPropagation()
    // console.log('playerGo', playerGo)
    // console.log('e.target', e.target)
    const correctGo = draggedElement.firstChild.classList.contains("svg" + playerGo) // will be a boolean depending on where piece was being dropped
    const taken = e.target.classList.contains("piece")
    const valid = checkIfValid(e.target)
    const opponentGo = playerGo === "white" ? "black" : "white" // if player is white, opponent is black. Else, opponent is white
    const takenByOpponent = e.target.firstChild?.classList.contains("svg" + opponentGo) // if e.target.firstchild exists...
    // console.log(taken, takenByOpponent)

    if (correctGo) {
        // must check this first
        if (takenByOpponent && valid) {
            e.target.parentNode.append(draggedElement)
            e.target.remove()
            checkForWin()
            // checkPossibilites()
            changePlayer()
            return
        }
        else if (taken && !takenByOpponent) { // then check this
            infoDisplay.textContent = "You cannot go there! That is your piece!"
            setTimeout(() => infoDisplay.textContent = "", 2000)
            return
        }
        else if (valid) {
            e.target.append(draggedElement)
            checkForWin()
            // checkPossibilites()
            changePlayer()
            return
        }
    }


    // NEED TO UNDERSTAND THIS BETTER!!!
    // console.log(e.target.parentNode)
    // console.log(e.target)
    // console.log(draggedElement.parentNode)
    // e.target.parentNode.append(draggedElement)
    // console.log(e.target.parentNode)
    // e.target.remove()
    // console.log(e.target)
    // console.log(e.target.parentNode)
    // e.target.append(draggedElement)
}

function checkIfValid(target) {
    const targetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id')) // if target.getAttribute('square-id') does not exist, get target.parentNode.getAttribute('square-id')
    const startId = Number(startPositionId)
    const piece = draggedElement.id
    console.log('startId', startId)
    console.log('targetId', targetId)
    console.log(piece)

    switch(piece) {
        case 'pawn' :
            if (
                allPossibleMoves["pawn"].includes(targetId)
            ) {
                return true
            }
            break;
        case 'knight':
            if (
                allPossibleMoves["knight"].includes(targetId)
            ) {
                return true
            }
            break;
        case 'bishop':
            if (
                allPossibleMoves["bishop"].includes(targetId)
            ) {
                return true
            }
            break;
        case 'rook':
            console.log(allPossibleMoves["rook"])
            if (                
                allPossibleMoves["rook"].includes(targetId)
            ) {
                return true
            }
            break;
        case 'queen':
            if (
                allPossibleMoves["queen"].includes(targetId)
            ) {
                return true
            }
            break;
        case 'king':
            if (
                allPossibleMoves["king"].includes(targetId)
            ) {
                return true
            }
            break;
    }
}




const coordinates = {};

i = 1
while (i <= 64) {
    // col, row
    pair = [((i+7)%8)+1, Math.floor((i+7)/8)]
    coordinates[i] = pair
    i++
    // console.log(pair)
    // window.alert(Math.floor(i+7/8))
}

// Object.freeze(coordinates)
// console.log(coordinates[2])

// const allSquares = document.querySelectorAll(".square")

function checkPossibilites() {
    allMoves = {"pawn": [], "knight": [], "bishop": [], "rook": [], "queen": [], "king": []}
    // allMovesOpp = {"pawn": [], "knight": [], "bishop": [], "rook": [], "queen": [], "king": []}
    
    pieces = []
    colors = []
    allSquares.forEach((square) => {
        const piece = square.firstChild?.id || ''
        pieces.push(piece)
        const color = square.firstChild?.firstChild.classList[0]
        colors.push(color)
    })

    if (playerGo === "white") {
        // window.alert("here")
        pieces.reverse()
        colors.reverse()
    }

    console.log(pieces)
    console.log(colors)

    pieces.forEach((piece, i) => {
        if (colors[i] === "svg" + playerGo) { // only add current playerGo color piece locations to allMoves
            key = i + 1
            switch(piece) {
                // all comments correspond to the original black turn perspective
                case 'pawn' :
                    // pawn moving (+0, +1)
                    coor = coordinates[key].slice()
                    coor[1]++
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["pawn"].push(key + width);

                    // pawn moving (+0, +2)
                    const starterRow = [9, 10, 11, 12, 13, 14, 15, 16]
                    if (starterRow.includes(key)) {
                        coor = coordinates[key].slice()
                        coor[1] += 2
                        if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["pawn"].push(key + (width * 2));
                    }

                    // pawn moving (-1, +1)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["pawn"].push(key + width - 1);

                    // pawn moving (+1, -1)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["pawn"].push(key + width + 1);
                    
                    break;
                case 'knight' :
                    // knight moving (+1, +2)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] += 2
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key+(width*2)+1);

                    // knight moving (-1, +2)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] += 2
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key+(width*2)-1);

                    // knight moving (+1, -2)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] -= 2
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key-(width*2)+1);

                    // knight moving (-1, -2)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] -= 2
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key-(width*2)-1);

                    // knight moving (+2, +1)
                    coor = 0
                    coor = coordinates[key].slice()
                    coor[0] += 2
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key+width+2);

                    // knight moving (-2, +1)
                    coor = coordinates[key].slice()
                    coor[0] -= 2
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key+width-2);

                    // knight moving (+2, -1)
                    coor = coordinates[key].slice()
                    coor[0] += 2
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key-width+2);

                    // knight moving (-2, -1)
                    coor = coordinates[key].slice()
                    coor[0] -= 2
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMoves["knight"].push(key-width-2);
                        
                    break;
                case 'bishop' :
                    // bishop moving down right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width+1
                    while (squareOpen) {
                        coor[0] += 1
                        coor[1] += 1
                        allMoves["bishop"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
                            // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["bishop"].pop()
                            }
                        }
                        loc = loc + width + 1
                    }

                    // bishop moving up left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width-1
                    while (squareOpen) {
                        coor[0] -= 1
                        coor[1] -= 1
                        allMoves["bishop"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["bishop"].pop()
                            }
                        }
                        loc = loc - width - 1
                    }

                    // bishop moving down left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width-1
                    while (squareOpen) {
                        coor[0] -= 1
                        coor[1] += 1
                        allMoves["bishop"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["bishop"].pop()
                            }
                        }
                        loc = loc + width - 1
                    }

                    // bishop moving up right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width+1
                    while (squareOpen) {
                        coor[0] += 1
                        coor[1] -= 1
                        allMoves["bishop"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
                            // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["bishop"].pop()
                            }
                        }
                        loc = loc - width + 1
                    }

                    break;
                case 'rook' :
                    // rook moving vertically down
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width
                    while (squareOpen) {
                        coor[1] += 1
                        allMoves["rook"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
                            // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["rook"].pop()
                            }
                        }
                        loc = loc + width
                    }

                    // rook moving vertically up
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width
                    while (squareOpen) {
                        coor[1] -= 1
                        allMoves["rook"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["rook"].pop()
                            }
                        }
                        loc = loc - width
                    }

                    // rook moving horizontally left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-1
                    while (squareOpen) {
                        coor[0] -= 1
                        allMoves["rook"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["rook"].pop()
                            }
                        }
                        loc = loc - 1
                    }

                    // rook moving horizontally right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+1
                    while (squareOpen) {
                        coor[0] += 1
                        allMoves["rook"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["rook"].pop()
                            }
                        }
                        loc = loc + 1
                    }
                    break;
                case 'queen':
                    // queen moving down right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width+1
                    while (squareOpen) {
                        coor[0] += 1
                        coor[1] += 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc + width + 1
                    }

                    // queen moving up left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width-1
                    while (squareOpen) {
                        coor[0] -= 1
                        coor[1] -= 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc - width - 1
                    }

                    // queen moving down left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width-1
                    while (squareOpen) {
                        coor[0] -= 1
                        coor[1] += 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc + width - 1
                    }

                    // queen moving up right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width+1
                    while (squareOpen) {
                        coor[0] += 1
                        coor[1] -= 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc - width + 1
                    }

                    // queen moving vertically down
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+width
                    while (squareOpen) {
                        coor[1] += 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc + width
                    }

                    // queen moving vertically up
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-width
                    while (squareOpen) {
                        coor[1] -= 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc - width
                    }

                    // queen moving horizontally left
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key-1
                    while (squareOpen) {
                        coor[0] -= 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc - 1
                    }

                    // queen moving horizontally right
                    squareOpen = true
                    coor = coordinates[key].slice()
                    loc = key+1
                    while (squareOpen) {
                        coor[0] += 1
                        allMoves["queen"].push(loc)
                        
                        if (
                            1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
                            (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
                        ) {
                            squareOpen = false
                            if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
                                allMoves["queen"].pop()
                            }
                        }
                        loc = loc + 1
                    }
                    break;
                case 'king':
                    function isPawnAttacking(curCoor) {
                        squareOne = [curCoor[0]+1, curCoor[1]+1]
                        squareTwo = [curCoor[0]-1, curCoor[1]+1]

                        const keyOne = Object.keys(coordinates).find(keyOneTemp => coordinates[keyOneTemp].toString() === squareOne.toString());
                        const keyTwo = Object.keys(coordinates).find(keyTwoTemp => coordinates[keyTwoTemp].toString() === squareTwo.toString())

                        if (playerGo === "black") {
                            currentPieceOne = allSquares[keyOne-1].firstChild?.id === "pawn"
                            currentPieceTwo = allSquares[keyTwo-1].firstChild?.id === "pawn"
                            if (
                                (currentPieceOne && allSquares[keyOne-1].firstChild.firstChild.classList.contains("svgwhite")) ||
                                (currentPieceTwo && allSquares[keyTwo-1].firstChild.firstChild.classList.contains("svgwhite"))
                            ) {
                                console.log(keyOne, keyTwo)
                                allSquares[keyOne-1].style.backgroundColor = "blue"
                                allSquares[keyTwo-1].style.backgroundColor = "blue"
                                return false
                            }
                        } else {
                            currentPieceOne = allSquares[64-keyOne].firstChild?.id === "pawn"
                            currentPieceTwo = allSquares[64-keyTwo].firstChild?.id === "pawn"
                            if (
                                (currentPieceOne && allSquares[64-keyOne].firstChild.firstChild.classList.contains("svgblack")) ||
                                (currentPieceTwo && allSquares[64-keyTwo].firstChild.firstChild.classList.contains("svgblack"))
                            ) {
                                console.log(keyOne, keyTwo)
                                allSquares[keyOne-1].style.backgroundColor = "purple"
                                allSquares[keyTwo-1].style.backgroundColor = "purple"
                                return false
                            }
                        }

                        return true
                        
                    }

                    // king moving (+1, +0)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] += 0
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key+1);

                    // king moving (-1, +0)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] += 0
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key-1);

                    // king moving (+0, +1)
                    coor = coordinates[key].slice()
                    coor[0] += 0
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key+width);

                    // king moving (+0, -1)
                    coor = coordinates[key].slice()
                    coor[0] += 0
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key-width);

                    // king moving (+1, +1)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key+1+width);

                    // king moving (-1, +1)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] += 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key-1+width);

                    // king moving (+1, -1)
                    coor = coordinates[key].slice()
                    coor[0] += 1
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key+1-width);

                    // king moving (-1, -1)
                    coor = coordinates[key].slice()
                    coor[0] -= 1
                    coor[1] -= 1
                    if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMoves["king"].push(key-1-width);

                    break;
            }
        }
        // else {
        //     key = i + 1
        //     switch(piece) {
        //         // all comments correspond to the original black turn perspective
        //         case 'pawn' :
        //             // pawn moving (+0, +1)
        //             coor = coordinates[key].slice()
        //             coor[1]++
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["pawn"].push(key + width);

        //             // pawn moving (+0, +2)
        //             const starterRow = [9, 10, 11, 12, 13, 14, 15, 16]
        //             if (starterRow.includes(key)) {
        //                 coor = coordinates[key].slice()
        //                 coor[1] += 2
        //                 if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["pawn"].push(key + (width * 2));
        //             }

        //             // pawn moving (-1, +1)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["pawn"].push(key + width - 1);

        //             // pawn moving (+1, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["pawn"].push(key + width + 1);
                    
        //             break;
        //         case 'knight' :
        //             // knight moving (+1, +2)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] += 2
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key+(width*2)+1);

        //             // knight moving (-1, +2)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] += 2
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key+(width*2)-1);

        //             // knight moving (+1, -2)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] -= 2
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key-(width*2)+1);

        //             // knight moving (-1, -2)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] -= 2
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key-(width*2)-1);

        //             // knight moving (+2, +1)
        //             coor = 0
        //             coor = coordinates[key].slice()
        //             coor[0] += 2
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key+width+2);

        //             // knight moving (-2, +1)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 2
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key+width-2);

        //             // knight moving (+2, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 2
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key-width+2);

        //             // knight moving (-2, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 2
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8) allMovesOpp["knight"].push(key-width-2);
                        
        //             break;
        //         case 'bishop' :
        //             // bishop moving down right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 coor[1] += 1
        //                 allMovesOpp["bishop"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
        //                     // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["bishop"].pop()
        //                     }
        //                 }
        //                 loc = loc + width + 1
        //             }

        //             // bishop moving up left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 coor[1] -= 1
        //                 allMovesOpp["bishop"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["bishop"].pop()
        //                     }
        //                 }
        //                 loc = loc - width - 1
        //             }

        //             // bishop moving down left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 coor[1] += 1
        //                 allMovesOpp["bishop"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["bishop"].pop()
        //                     }
        //                 }
        //                 loc = loc + width - 1
        //             }

        //             // bishop moving up right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 coor[1] -= 1
        //                 allMovesOpp["bishop"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
        //                     // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["bishop"].pop()
        //                     }
        //                 }
        //                 loc = loc - width + 1
        //             }

        //             break;
        //         case 'rook' :
        //             // rook moving vertically down
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width
        //             while (squareOpen) {
        //                 coor[1] += 1
        //                 allMovesOpp["rook"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     // console.log("yes", playerGo, loc, 64-loc+1,allSquares[64-loc].getAttribute("square-id"))
        //                     // console.log(playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)                            
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["rook"].pop()
        //                     }
        //                 }
        //                 loc = loc + width
        //             }

        //             // rook moving vertically up
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width
        //             while (squareOpen) {
        //                 coor[1] -= 1
        //                 allMovesOpp["rook"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["rook"].pop()
        //                     }
        //                 }
        //                 loc = loc - width
        //             }

        //             // rook moving horizontally left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 allMovesOpp["rook"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["rook"].pop()
        //                     }
        //                 }
        //                 loc = loc - 1
        //             }

        //             // rook moving horizontally right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 allMovesOpp["rook"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["rook"].pop()
        //                     }
        //                 }
        //                 loc = loc + 1
        //             }
        //             break;
        //         case 'queen':
        //             // queen moving down right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 coor[1] += 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc + width + 1
        //             }

        //             // queen moving up left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 coor[1] -= 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc - width - 1
        //             }

        //             // queen moving down left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 coor[1] += 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc + width - 1
        //             }

        //             // queen moving up right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 coor[1] -= 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc - width + 1
        //             }

        //             // queen moving vertically down
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+width
        //             while (squareOpen) {
        //                 coor[1] += 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc + width
        //             }

        //             // queen moving vertically up
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-width
        //             while (squareOpen) {
        //                 coor[1] -= 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc - width
        //             }

        //             // queen moving horizontally left
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key-1
        //             while (squareOpen) {
        //                 coor[0] -= 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc - 1
        //             }

        //             // queen moving horizontally right
        //             squareOpen = true
        //             coor = coordinates[key].slice()
        //             loc = key+1
        //             while (squareOpen) {
        //                 coor[0] += 1
        //                 allMovesOpp["queen"].push(loc)
                        
        //                 if (
        //                     1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8 || 
        //                     (playerGo === "black" ? !!allSquares[loc-1].firstChild : !!allSquares[64-loc].firstChild)
        //                 ) {
        //                     squareOpen = false
        //                     if (1 > coor[0] || coor[0] > 8 || 1 > coor[1] || coor[1] > 8) {
        //                         allMovesOpp["queen"].pop()
        //                     }
        //                 }
        //                 loc = loc + 1
        //             }
        //             break;
        //         case 'king':
        //             function isPawnAttacking(curCoor) {
        //                 squareOne = [curCoor[0]+1, curCoor[1]+1]
        //                 squareTwo = [curCoor[0]-1, curCoor[1]+1]

        //                 const keyOne = Object.keys(coordinates).find(keyOneTemp => coordinates[keyOneTemp].toString() === squareOne.toString());
        //                 const keyTwo = Object.keys(coordinates).find(keyTwoTemp => coordinates[keyTwoTemp].toString() === squareTwo.toString())

        //                 if (playerGo === "black") {
        //                     currentPieceOne = allSquares[keyOne-1].firstChild?.id === "pawn"
        //                     currentPieceTwo = allSquares[keyTwo-1].firstChild?.id === "pawn"
        //                     if (
        //                         (currentPieceOne && allSquares[keyOne-1].firstChild.firstChild.classList.contains("svgwhite")) ||
        //                         (currentPieceTwo && allSquares[keyTwo-1].firstChild.firstChild.classList.contains("svgwhite"))
        //                     ) {
        //                         console.log(keyOne, keyTwo)
        //                         allSquares[keyOne-1].style.backgroundColor = "blue"
        //                         allSquares[keyTwo-1].style.backgroundColor = "blue"
        //                         return false
        //                     }
        //                 } else {
        //                     currentPieceOne = allSquares[64-keyOne].firstChild?.id === "pawn"
        //                     currentPieceTwo = allSquares[64-keyTwo].firstChild?.id === "pawn"
        //                     if (
        //                         (currentPieceOne && allSquares[64-keyOne].firstChild.firstChild.classList.contains("svgblack")) ||
        //                         (currentPieceTwo && allSquares[64-keyTwo].firstChild.firstChild.classList.contains("svgblack"))
        //                     ) {
        //                         console.log(keyOne, keyTwo)
        //                         allSquares[keyOne-1].style.backgroundColor = "purple"
        //                         allSquares[keyTwo-1].style.backgroundColor = "purple"
        //                         return false
        //                     }
        //                 }

        //                 return true
                        
        //             }

        //             // king moving (+1, +0)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] += 0
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key+1);

        //             // king moving (-1, +0)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] += 0
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key-1);

        //             // king moving (+0, +1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 0
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key+width);

        //             // king moving (+0, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 0
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key-width);

        //             // king moving (+1, +1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key+1+width);

        //             // king moving (-1, +1)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] += 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key-1+width);

        //             // king moving (+1, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] += 1
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key+1-width);

        //             // king moving (-1, -1)
        //             coor = coordinates[key].slice()
        //             coor[0] -= 1
        //             coor[1] -= 1
        //             if (1 <= coor[0] && coor[0] <= 8 && 1 <= coor[1] && coor[1] <= 8 && isPawnAttacking(coor)) allMovesOpp["king"].push(key-1-width);

        //             break;
        //     }
        // }
    
    })

    // if (playerGo === "white") {
    //     if 
    // } else {

    // }
    // console.log(allMoves["knight"])
    // allSquares.forEach(square => {
    //     square.style.backgroundColor = "gray"
    //     if (allMoves["knight"].includes(Number(square.getAttribute("square-id")))) {
    //         // console.log(Number(square.getAttribute("square-id")))
    //         square.style.backgroundColor = "green"
    //     }
    // })

    // const piece = draggedElement.id
    // console.log(piece)
    return allMoves
}

allPossibleMoves = checkPossibilites() // run once at the start




function check() {
    // console.log("updated", allMoves)
    const kings = Array.from(document.querySelectorAll('#king'))
    console.log("kings", kings[0])
    let kingLocation
    if (playerGo === "black") {
        kings.forEach((king, i) => {
            if (king.firstChild.classList.contains("svgblack")) {
                console.log("black turn")
                kingLocation = 64 - king.parentNode.getAttribute("square-id") + 1
                console.log("black king location", kingLocation)
                // console.log(king.parentNode.getAttribute("square-id"))

                playerGo = "white"
                backTrack = checkPossibilites()
                playerGo = "black"

                for (const [key, array] of Object.entries(backTrack)) {
                    if (key != "king") {
                        console.log(key, array)
                        for (let i = 0; i < array.length; i++) {
                            // console.log(Number(kingLocation), Number(array[i]))
                            // if (kingLocation === array[i]) return true
                            if (Number(kingLocation) === Number(array[i])) console.log("CHECK!")
                        }
                    }
                }
            }
        })
    } else {
        kings.forEach((king, i) => {
            if (king.firstChild.classList.contains("svgwhite")) {
                console.log("white turn")
                kingLocation = 64 - king.parentNode.getAttribute("square-id") + 1
                console.log("white king location", kingLocation)
                console.log(king.parentNode.getAttribute("square-id"))

                // window.alert("what")
                playerGo = "black"
                backTrack = checkPossibilites()
                playerGo = "white"

                for (const [key, array] of Object.entries(backTrack)) {
                    if (key != "king") {
                        console.log(key, array)
                        for (let i = 0; i < array.length; i++) {
                            // console.log(Number(kingLocation), Number(array[i]))
                            // if (kingLocation === array[i]) return true
                            if (Number(kingLocation) === Number(array[i])) console.log("CHECK!")
                        }
                    }
                }
            }
        })
    }
    return false
}

// function checkMate() {
//     for (let i = 0; i < allMoves["king"].length; i++) {
//         if (
//             allMoves["pawn"].contains  allMoves["king"][i]
//         )
//     }
// }

function mouseover(e) {
    let hoverPiece
    let colorPiece

    hoverBool = !e.target.getAttribute('square-id')
    // console.log(hoverBool)
    // window.alert("hi")
    // console.log(e.target.getAttribute('square-id'))
    if (hoverBool) {
        hoverPiece = e.target.getAttribute('id')
        // hoverPieceUnique = e.target.parentNode.getAttribute('square-id')
        colorPiece = e.target.firstChild.classList[0]
    }
    // console.log(hoverPiece)

    if (colorPiece === "svg" + playerGo) {
        allSquares.forEach(square => {
            square.style.backgroundColor = "gray"
            if (allPossibleMoves[hoverPiece]?.includes(Number(square.getAttribute("square-id"))) && !square.firstChild?.firstChild.classList.contains("svg" + playerGo)) {
                // console.log(Number(square.getAttribute("square-id")))
                square.style.backgroundColor = "green"
            }
        })
    }

    // console.log(allMoves[hoverPiece])

    // if (playerGo === "white") {
    //     hoverBool = !e.target.getAttribute('square-id')
    //     // window.alert("hi")
    //     // console.log(e.target.getAttribute('square-id'))
    //     if (hoverBool) {
    //         hoverPiece = e.target.parentNode.getAttribute('square-id')
            
    //     }
    //     console.log(hoverPiece)
    // } 
    
    // else if (playerGo === "black") {
    //     hoverBool = !e.target.getAttribute('square-id')
    //     if (hoverBool) {
    //         hoverPiece = e.target.parentNode.getAttribute('square-id')
    //     }
    //     console.log(hoverPiece)
    // }
    // else {

    // }
    // console.log(allMoves["knight"])
    // allSquares.forEach(square => {
    //     square.style.backgroundColor = "gray"
    //     if (allMoves["knight"].includes(Number(square.getAttribute("square-id")))) {
    //         // console.log(Number(square.getAttribute("square-id")))
    //         square.style.backgroundColor = "green"
    //     }
    // })
}

function mouseout(e) {
    allSquares.forEach(square => {
        square.style.backgroundColor = null
    })
}

function changePlayer() {
    const squareBorder = document.querySelectorAll(".square")
    const cprefix = document.querySelectorAll(".cprefix")

    if (playerGo === "black") {
        playerGo = "white"

        allPossibleMoves = checkPossibilites()

        squareBorder.forEach((square) => {
            square.style.border = '3px solid black'
        });
        cprefix.forEach((prefix) => {
            prefix.style.color = 'black'
        });

        reverseIds()

        check()

        playerDisplay.innerHTML = "<p id='color-white'>It's <span class='bold-white'>White</span>'s Turn!</p>"
    } else {
        playerGo = "black"

        allPossibleMoves = checkPossibilites()

        squareBorder.forEach((square) => {
            square.style.border = '3px solid white'
        });
        cprefix.forEach((prefix) => {
            prefix.style.color = 'white'
        });

        revertIds()

        check()

        playerDisplay.innerHTML = "<p id='color-black'>It's <span class='bold-black'>Black</span>'s Turn!</p>"
    }
}

function reverseIds() {
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>
        square.setAttribute('square-id', (width * width) - i))
}

function revertIds() {
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>
        square.setAttribute('square-id', i + 1))
}

function checkForWin() {
    const kings = Array.from(document.querySelectorAll('#king'))
    console.log(kings)
    if (!kings.some(king => !king.firstChild.classList.contains("svgwhite"))) {
        playerDisplay.innerHTML = "Black Player Wins!!!"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }
    if (!kings.some(king => !king.firstChild.classList.contains("svgblack"))) {
        playerDisplay.innerHTML = "White Player Wins!!!"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }
}












// let main = {

//     variables: {
//       turn: 'w',
//       selectedpiece: '',
//       highlighted: [],
//       pieces: {
//         w_king: {
//           position: 'e1',
//           img: '&#9812;',
//           captured: false,
//           moved: false,
//           type: 'w_king'
          
//         },
//         w_queen: {
//           position: 'd1',
//           img: '&#9813;',
//           captured: false,
//           moved: false,
//           type: 'w_queen'
//         },
//         w_bishop1: {
//           position: 'c1',
//           img: '&#9815;',
//           captured: false,
//           moved: false,
//           type: 'w_bishop'
//         },
//         w_bishop2: {
//           position: 'f1',
//           img: '&#9815;',
//           captured: false,
//           moved: false,
//           type: 'w_bishop'
//         },
//         w_knight1: {
//           position: 'b1',
//           img: '&#9816;',
//           captured: false,
//           moved: false,
//           type: 'w_knight'
//         },
//         w_knight2: {
//           position: 'g1',
//           img: '&#9816;',
//           captured: false,
//           moved: false,
//           type: 'w_knight'
//         },
//         w_rook1: {
//           position: 'a1',
//           img: '&#9814;',
//           captured: false,
//           moved: false,
//           type: 'w_rook'
//         },
//         w_rook2: {
//           position: 'h1',
//           img: '&#9814;',
//           captured: false,
//           moved: false,
//           type: 'w_rook'
//         },
//         w_pawn1: {
//           position: 'a2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn2: {
//           position: 'b2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn3: {
//           position: 'c2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn4: {
//           position: 'd2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn5: {
//           position: 'e2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn6: {
//           position: 'f2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn7: {
//           position: 'g2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
//         w_pawn8: {
//           position: 'h2',
//           img: '&#9817;',
//           captured: false,
//           type: 'w_pawn',
//           moved: false
//         },
  
//         b_king: {
//           position: 'e8',
//           img: '&#9818;',
//           captured: false,
//           moved: false,
//           type: 'b_king'
//         },
//         b_queen: {
//           position: 'd8',
//           img: '&#9819;',
//           captured: false,
//           moved: false,
//           type: 'b_queen'
//         },
//         b_bishop1: {
//           position: 'c8',
//           img: '&#9821;',
//           captured: false,
//           moved: false,
//           type: 'b_bishop'
//         },
//         b_bishop2: {
//           position: 'f8',
//           img: '&#9821;',
//           captured: false,
//           moved: false,
//           type: 'b_bishop'
//         },
//         b_knight1: {
//           position: 'b8',
//           img: '&#9822;',
//           captured: false,
//           moved: false,
//           type: 'b_knight'
//         },
//         b_knight2: {
//           position: 'g8',
//           img: '&#9822;',
//           captured: false,
//           moved: false,
//           type: 'b_knight'
//         },
//         b_rook1: {
//           position: 'a8',
//           img: '&#9820;',
//           captured: false,
//           moved: false,
//           type: 'b_rook'
//         },
//         b_rook2: {
//           position: 'h8',
//           img: '&#9820;',
//           captured: false,
//           moved: false,
//           type: 'b_rook'
//         },
//         b_pawn1: {
//           position: 'a7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn2: {
//           position: 'b7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn3: {
//           position: 'c7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn4: {
//           position: 'd7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn5: {
//           position: 'e7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn6: {
//           position: 'f7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn7: {
//           position: 'g7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         },
//         b_pawn8: {
//           position: 'h7',
//           img: '&#9823;',
//           captured: false,
//           type: 'b_pawn',
//           moved: false
//         }
  
//       }
//     },

//     methods: {
//         gamesetup: function() {
//           $('.gamecell').attr('chess', 'null');
//           for (let gamepiece in main.variables.pieces) {
//             $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
//             $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
//             // $(main.variables.pieces[gamepiece].img).css("color", "blue");
//             // $('#' + main.variables.pieces[gamepiece].img).css("min-height", "100%");
//           }
//         }
//     }
// };

// $(document).ready(function() {
//     main.methods.gamesetup();
// });