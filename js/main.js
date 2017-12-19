/*----- constants -----*/
var playerColors = {
    '1': 'blue',
    '-1': 'red',
    'null': 'white'
};


/*----- app's state (variables) -----*/
var board, turn, win;

/*----- cached element references -----*/
// a message telling whos turn it is whether its player 1 or 2's turn
var msgEl = document.getElementById('message');


/*----- event listeners -----*/
// when game starts it will be blank until someone clicks a square
//when one square is clicked the last one on the squares will be
// filled in.
document.querySelector('table').addEventListener('click', function(evt) {
    var colIdx = parseInt(evt.target.getAttribute('data-col'));
    var column = board[colIdx];
    if (!column.includes(null)) return;
    // task: using clicked element id update the correct element in my board array
    column[column.indexOf(null)] = turn;
    turn *= -1;
    // win = getWinner();
    render();
});


// when restart game button is clicked clear the game
document.querySelector('button').addEventListener('click', function(evt) {
    console.log('hello!!!!!!!!')
    initialize();
    render();
});


/*----- functions -----*/
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


/*----- win logic -----*/

initialize();
render();