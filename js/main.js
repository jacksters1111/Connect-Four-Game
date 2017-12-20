var playerColors = {
    '1': 'blue',
    '-1': 'red',
    'null': 'white'
};


var board, turn, win;


var msgEl = document.getElementById('message');


document.querySelector('table').addEventListener('click', function(evt) {
    var colIdx = parseInt(evt.target.getAttribute('data-col'));
    var column = board[colIdx];
    if (!column.includes(null)) return;
    column[column.indexOf(null)] = turn;
    turn *= -1;
    win = getWinner();
    render();
});


document.querySelector('button').addEventListener('click', function(evt) {
    console.log('hello!!!!!!!!')
    initialize();
    render();
});


function initialize() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    turn = 1;
    win = null;
}


function render() {
    board.forEach(function(colArr, idx) {
        var cells = document.querySelectorAll(`[data-col="${idx}"]`)
        for( var i = 0; i < cells.length; i++) {
            cells[5 - i].style.backgroundColor = playerColors[board[idx][i]]
        }
    });
    if (win) {
        msgEl.innerHTML = `Congrats, Player ${playerColors[win].toUpperCase()} Wins!`;
    } else {
        msgEl.innerHTML = `It's Player ${playerColors[turn].toUpperCase()}'s Turn!`;

    } 
}


function getWinner() {
     /* var winner = null;
    for (var col = 0, i < winner.length; i++) {
        winner = getColumnWin(colIdx);
    if (winner) break;
}
    return winner;
        }
    for( var i = 0; i < column.length; i++) {

    }
    */
}
initialize();
render();