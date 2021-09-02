/**
 * @file Logic for tic-tac-toe game
 * @author Dylan Mayor
 */
'use strict';

/* Score counting variables:
 *  playerOneScore: score of player one
 *  playerTwoScore: score of player two
 *  playeOnesTurn: whether it is player ones turn
 */
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOnesTurn = true;

/* Board variables:
 *  matching lines: holds all possible winning matches
 *  curBoardSize: size of the board (curBoardSize * curBoardSize)
 *  clickCnt: number of valid clicks/set tiles
 */
let matchingLines = [];
let curBoardSize = 0;
let clickCnt = 0;

// Enum for winning/drawing conditions
const DRAW = 'draw';
const WON = 'win';
const CONTINUE = 'continue';

// Symbols used in buttons
const EMPTY_SYM = '-';
const P_ONE_SYM = 'X';
const P_TWO_SYM = 'O';

/**
 * Event triggered when a grid button is clicked.
 * Handles most moving game logic
 * @param {Event} event click event
 */
function gridClick(event) {
  const clickedButton = event.target;

  // check to make sure player selections aren't overwritten
  if (clickedButton.innerText !== EMPTY_SYM) return;

  clickedButton.innerText = playerOnesTurn ? P_ONE_SYM : P_TWO_SYM;
  clickCnt++;

  // check for winning conditions
  switch (hasWinner()) {
    case WON:
      console.log('WE HAVE A WINNER!');
      lockBoard();
      addPoint(playerOnesTurn);
      updatePlayerInfo();
      break;
    case DRAW:
      lockBoard();
      console.log('DRAW');
      break;
    default:
      break;
  }
  setPlayer(!playerOnesTurn);
}

/**
 * Sets the current playing player & updates css
 * @param {bool} isPlayerOne The new player selection
 */
function setPlayer(isPlayerOne) {
  playerOnesTurn = isPlayerOne;

  if (playerOnesTurn) {
    document.querySelector('#player-1').classList.add('current_player');
    document.querySelector('#player-2').classList.remove('current_player');
  } else {
    document.querySelector('#player-2').classList.add('current_player');
    document.querySelector('#player-1').classList.remove('current_player');
  }
}

/**
 * Adds a point to the chosen player
 * @param {bool} isPlayerOne whether the point is to be added to player one
 */
function addPoint(isPlayerOne) {
  if (isPlayerOne) {
    playerOneScore++;
  } else {
    playerTwoScore++;
  }
}

/**
 * locks the game board and disallows any more selections
 */
function lockBoard() {
  document.querySelectorAll('.game-square').forEach((square) => {
    square.disabled = true;
    square.classList.add('disabled');
  });
}

/**
 * Clears the board and makes it clickable
 */
function clearBoard() {
  document.querySelectorAll('.game-square').forEach((square) => {
    square.disabled = false;
    square.innerText = EMPTY_SYM;
    square.classList.remove('disabled');
  });
}

/**
 * Generates a new board in the board div
 * @param {number} boardSize size of the new board
 */
function generateBoard(boardSize) {
  const boardDiv = document.querySelector('#ttt-board');
  const boardTable = document.createElement('table');
  matchingLines = genMatchingLines(boardSize);
  curBoardSize = boardSize;

  boardDiv.innerHTML = '';

  for (let y = 0; y < boardSize; y++) {
    const boardRow = document.createElement('tr');
    for (let x = 0; x < boardSize; x++) {
      const boardSegment = document.createElement('td');
      const boardButton = document.createElement('button');

      boardButton.innerText = EMPTY_SYM;
      boardButton.id = createSquareID((y * boardSize) + x);
      boardButton.classList.add('game-square');

      boardButton.addEventListener('click', gridClick);
      boardSegment.appendChild(boardButton);
      boardRow.appendChild(boardSegment);
    }

    boardTable.appendChild(boardRow);
  }

  boardDiv.appendChild(boardTable);
}

/**
 * Generates a list of possible winning conditions and returns the result
 * @param {number} boardSize size of the square board
 * @return {[[]]} nested array containing all matches for the board size
 */
function genMatchingLines(boardSize) {
  const matchingLines = [];
  const matchingSectionDiagLeft = [];
  const matchingSectionDiagRight = [];

  // Horiz & vert lines
  for (let y = 0; y < boardSize; y++) {
    const matchingSectionHoriz = [];
    const matchingSectionVert = [];

    for (let x = 0; x < boardSize; x++) {
      matchingSectionHoriz.push((y * boardSize) + x);
      matchingSectionVert.push((x * boardSize) + y);
    }

    matchingLines.push(matchingSectionHoriz);
    matchingLines.push(matchingSectionVert);
  }

  // left-to-right diag
  for (let i = 0; i < boardSize; i++) {
    matchingSectionDiagLeft.push(i + (i * boardSize));
  }

  // right-to-left diag
  let offset = boardSize;
  for (let y = 0; y < boardSize; y++) {
    matchingSectionDiagRight.push((boardSize * y) + --offset);
  }

  matchingLines.push(matchingSectionDiagLeft);
  matchingLines.push(matchingSectionDiagRight);

  return matchingLines;
}

/**
 * Checks if any winning conditions have been met
 * @return {string} what the current win condition is
 */
function hasWinner() {
  const playerChar = playerOnesTurn ? P_ONE_SYM : P_TWO_SYM;


  for (const match of matchingLines) {
    if (match.every((id) => {
      return getButton(id).innerText === playerChar;
    })) return WON;
  }

  return (clickCnt === (curBoardSize * curBoardSize)) ? DRAW : CONTINUE;
}

/**
 * Formats and returns the button at the given position
 * @param {number} pos position of the button (held in a flat array)
 * @return {*} The button(or null) with the matching square id
 */
function getButton(pos) {
  return document.querySelector('#' + createSquareID(pos));
}

/**
 * Formats the passed position into an ID
 * @param {number} pos ID of the square
 * @return {string} The formatted string
 */
function createSquareID(pos) {
  return 'square-' + pos;
}

/**
 * Updates the player info to reflect the current score
 */
function updatePlayerInfo() {
  document.querySelector('#player-1-info').innerText = playerOneScore;
  document.querySelector('#player-2-info').innerText = playerTwoScore;
}

/**
 * Resets the game, whilst keeping the same board size
 */
function resetGame() {
  clearBoard();
  clickCnt = 0;
  setPlayer(true);
}

/**
 * Constructs a new board
 * @param {number} boardSize new board size
 */
function buildNewBoard(boardSize) {
  resetGame();
  generateBoard(boardSize);
}

// MAIN
window.addEventListener('load', () => {
  buildNewBoard(3);
  updatePlayerInfo();

  document.querySelector('#reset-game').addEventListener(
      'click', resetGame,
  );

  document.querySelector('#inc-board-size').addEventListener('click', () => {
    buildNewBoard(++curBoardSize);
  });

  document.querySelector('#dec-board-size').addEventListener('click', () => {
    buildNewBoard(--curBoardSize);
  });
});
