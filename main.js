/*----- constants -----*/
var players = {
    0: 'white',
    1: 'blue',
    "-1": 'red'
};

var board = [
    [0,1,2,3,4,5,6],
    [7,8,9,10,11,12,13],
    [14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27],
    [28,29,30,31,32,33,34],
    [35,36,37,38,39,40,41],
];

// winning squares horizontally
var winningSquares = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
// winning squares vertically
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41], 
// winning squares diaganolly from top left to bottom right
    [14, 22, 30, 38],
    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [0, 8, 16, 24],
    [16, 24, 32, 40],
    [8, 16, 24, 32],
    [1, 9, 17, 25],
    [17, 25, 33, 41],
    [9, 17, 25, 33],
    [2, 10, 18, 26],
    [10, 18, 26, 34],
    [3, 11, 19, 27],
// winning squares diaganolly from top right to bottom left
    [20, 26, 32, 38],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [5, 11, 17, 23],
    [17, 23, 29, 35],
    [11, 17, 23, 29],
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [3, 9, 15, 21],
];



/*----- app's state (variables) -----*/
var board, turn, winner;

/*----- cached element references -----*/
// a message telling whos turn it is whether its player 1 or 2's turn
var message = document.getElementById('message');


/*----- event listeners -----*/
// when game starts it will be blank until someone clicks a square
document.querySelector('table').addEventListener('click', function(evt) {

});

//when one square is clicked the last one on the squares will be
// filled in.
document.querySelector('table').addEventListener('click', function(evt) {
    win = winner();
    initialize();
    render();
});


// when restart game button is clicked clear the game
// initBoard() {}
document.querySelector('button').addEventListener('click', function(evt) {
    initialize();
    render();
});


/*----- functions -----*/
function initialize() {
    turn = 1;
    win = null;
}

function render() {
   
}

function arrayCallBack() {

}

function turn() {

}

/*----- win logic -----*/
// when one player connects four squares horizontally vertically
// or diagonally display message "player 1 or 2 has won."
function winner() {

}

// when no 4 squares are connected and the whole board is filled in 
// display message "Tie, No Winners. :("

initialize();
render();

  
  
  