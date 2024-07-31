// const coordinates = {};

// i = 1
// while (i <= 64) {
//     // col, row
//     pair = [((i+7)%8)+1, Math.floor((i+7)/8)]
//     coordinates[i] = pair
//     i++
//     // console.log(pair)
//     // window.alert(Math.floor(i+7/8))
// }

// // console.log(coordinates[48])

// const pawnMoves = []
// const knightMoves = []
// const bishopMoves = []
// const rookMoves = []
// const queenMoves = []
// const kingMoves = []

// // const allSquares = document.querySelectorAll(".square")

// function checkPossibilites() {
//     pieces = []
//     allSquares.forEach(square => {
//         const piece = square.firstChild?.id || ''
//         pieces.push(piece)
//     })
//     console.log(pieces)

//     pieces.forEach(piece, i => {
//         key = i + 1
//         switch(piece) {
//             case 'pawn' :
//                 const starterRow = [9, 10, 11, 12, 13, 14, 15, 16]

//                 pawnMoves.push(key + width)

//                 // pawn moving +2
//                 if (starterRow.includes(key)) {
//                     coor = coordinates[key + 2]
//                     coor[1]++
//                     if (1 <= coor[0] <= 8 && 1 <= coor[1] <= 8) pawnMoves.push(coor)
//                 }

//                 if (startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild)


//                 if (
//                     starterRow.includes(startId) && startId + (width * 2) === targetId ||
//                     startId + width === targetId ||
//                     startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
//                     startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild
//                 ) {
//                     return true
//                 }
//                 break;
//             case 'knight':
//                 if (
//                     startId + (width * 2) + 1 === targetId ||
//                     startId + (width * 2) - 1 === targetId ||
//                     startId + width - 2 === targetId ||
//                     startId + width + 2 === targetId ||
//                     startId - (width * 2) + 1 === targetId ||
//                     startId - (width * 2) - 1 === targetId ||
//                     startId - width - 2 === targetId ||
//                     startId - width + 2 === targetId
//                 ) {
//                     return true
//                 }
//                 break;
//             case 'bishop':
//                 if (
//                     // plus plus - y=-x
//                     startId + width + 1 === targetId ||
//                     startId + (width * 2) + 2 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild ||
//                     startId + (width * 3) + 3 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) ||
//                     startId + (width * 4) + 4 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) ||
//                     startId + (width * 5) + 5 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) ||
//                     startId + (width * 6) + 6 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) + 5}"]`.firstChild) ||
//                     startId + (width * 7) + 7 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) + 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 6) + 6}"]`.firstChild) ||
//                     // minus minus - y=-x
//                     startId - width + 1 === targetId ||
//                     startId - (width * 2) - 2 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`).firstChild ||
//                     startId - (width * 3) - 3 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) ||
//                     startId - (width * 4) - 4 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) ||
//                     startId - (width * 5) - 5 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) ||
//                     startId - (width * 6) - 6 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) - 5}"]`.firstChild) ||
//                     startId - (width * 7) - 7 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) - 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 6) - 6}"]`.firstChild) ||
//                     // minus plus - y=x
//                     startId - width + 1 === targetId ||
//                     startId - (width * 2) + 2 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`).firstChild ||
//                     startId - (width * 3) + 3 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) ||
//                     startId - (width * 4) + 4 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) ||
//                     startId - (width * 5) + 5 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) ||
//                     startId - (width * 6) + 6 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) + 5}"]`.firstChild) ||
//                     startId - (width * 7) + 7 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) + 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 6) + 6}"]`.firstChild) ||
//                     // plus minus - y=x
//                     startId + width - 1 === targetId ||
//                     startId + (width * 2) - 2 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
//                     startId + (width * 3) - 3 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) ||
//                     startId + (width * 4) - 4 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) ||
//                     startId + (width * 5) - 5 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) ||
//                     startId + (width * 6) - 6 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) - 5}"]`.firstChild) ||
//                     startId + (width * 7) - 7 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) - 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 6) - 6}"]`.firstChild)
//                 ) {
//                     return true
//                 }
//                 break;
//             case 'rook':
//                 if (
//                     // vertically
//                     Math.abs(targetId - startId) % width === 0 && !document.querySelector(`[square-id="${targetId}"]`).firstChild && targetId != startId ||
//                     // horizontally - fix this to not go over rows
//                     Math.abs(targetId - startId) < 8
//                 ) {
//                     return true
//                 }
//                 break;
//             case 'queen':
//                 if (
//                     // bishop
//                     // plus plus - y=-x
//                     startId + width + 1 === targetId ||
//                     startId + (width * 2) + 2 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild ||
//                     startId + (width * 3) + 3 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) ||
//                     startId + (width * 4) + 4 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) ||
//                     startId + (width * 5) + 5 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) ||
//                     startId + (width * 6) + 6 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) + 5}"]`.firstChild) ||
//                     startId + (width * 7) + 7 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) + 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 6) + 6}"]`.firstChild) ||
//                     // minus minus - y=-x
//                     startId - width + 1 === targetId ||
//                     startId - (width * 2) - 2 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`).firstChild ||
//                     startId - (width * 3) - 3 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) ||
//                     startId - (width * 4) - 4 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) ||
//                     startId - (width * 5) - 5 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) ||
//                     startId - (width * 6) - 6 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) - 5}"]`.firstChild) ||
//                     startId - (width * 7) - 7 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) - 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 6) - 6}"]`.firstChild) ||
//                     // minus plus - y=x
//                     startId - width + 1 === targetId ||
//                     startId - (width * 2) + 2 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`).firstChild ||
//                     startId - (width * 3) + 3 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) ||
//                     startId - (width * 4) + 4 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) ||
//                     startId - (width * 5) + 5 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) ||
//                     startId - (width * 6) + 6 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) + 5}"]`.firstChild) ||
//                     startId - (width * 7) + 7 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 2) + 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 3) + 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 4) + 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 5) + 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId - (width * 6) + 6}"]`.firstChild) ||
//                     // plus minus - y=x
//                     startId + width - 1 === targetId ||
//                     startId + (width * 2) - 2 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
//                     startId + (width * 3) - 3 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) ||
//                     startId + (width * 4) - 4 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) ||
//                     startId + (width * 5) - 5 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) ||
//                     startId + (width * 6) - 6 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) - 5}"]`.firstChild) ||
//                     startId + (width * 7) - 7 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 2) - 2}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 3) - 3}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 4) - 4}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 5) - 5}"]`.firstChild) && !document.querySelector(`[square-id="${startId + (width * 6) - 6}"]`.firstChild) ||
    
//                     // rook
//                     // vertically
//                     Math.abs(targetId - startId) % width === 0 && !document.querySelector(`[square-id="${targetId}"]`).firstChild && targetId != startId ||
//                     // horizontally - fix this to not go over rows
//                     Math.abs(targetId - startId) < 8
//                 ) {
//                     return true
//                 }
//                 break;
//             case 'king':
//                 if (
//                     startId + 1 === targetId ||
//                     startId - 1 === targetId ||
//                     startId + width === targetId ||
//                     startId - width === targetId ||
//                     startId + width + 1 === targetId ||
//                     startId + width - 1 === targetId ||
//                     startId - width + 1 === targetId ||
//                     startId - width - 1 === targetId
//                 ) {
//                     return true
//                 }
//                 break;
//         }
    
//     })

//     // const piece = draggedElement.id
//     // console.log(piece)
// }
// checkPossibilites()
