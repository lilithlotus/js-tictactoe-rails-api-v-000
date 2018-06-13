// Code your JavaScript / jQuery solution here
var turn = 0;

const WIN_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];


function player() {
  if(turn % 2 === 0) {
    return "X";
  } else {
    return "O";
  };
}

function updateState(square) {
  var token = player();
  $(square).text(token);
}

function setMessage(str) {
  $('div#message').append(str);
}

function checkWinner() {
  const winning_combos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  board = {};
  $('td').text((i, token) => board[i] = token);
  for (let combo of winning_combos) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`);
      return true;
    };
  };
  return false;
}

function doTurn(square) {
  turn ++;
  updateState(square);
  checkWinner();
  if(turn === 9 && !checkWinner()) {
    setMessage('Tie game.')
  };
}
