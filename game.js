
var scorePlayer1 = 0;
var scorePlayer2 = 0;

var turn = 1;
var turns = 0;

var board = {"ul": 0,
             "uc": 0,
             "ur": 0,

             "cl": 0,
             "cc": 0,
             "cr": 0,
             
             "ll": 0,
             "lc": 0,
             "lr": 0,
            };

function reset() {

    turn = 1;
    turns = 0;

    board = {"ul": 0,
             "uc": 0,
             "ur": 0,

             "cl": 0,
             "cc": 0,
             "cr": 0,
             
             "ll": 0,
             "lc": 0,
             "lr": 0,
            };

    for (key in board) {
        document.getElementById(key).innerHTML = "&nbsp;";
    }
}

function play(field) {

    // Check if field is free
    if (board[field] == 0) {
        board[field] = turn;

        if (turn == 1) {
            document.getElementById(field).innerHTML = '<img border="0" src="sandbox-blue.png" style="width: 100px;">';
        } else {
            document.getElementById(field).innerHTML = '<img border="0" src="sandbox-red.png" style="width: 100px;">';
        }

        // Check if the player won
        var won = false;
        if (board['ur'] == turn && board['uc'] == turn && board['ul'] == turn) {  // horiz upper
            won = true;
        } else if (board['cr'] == turn && board['cc'] == turn && board['cl'] == turn) {  // horiz center
            won = true;
        } else if (board['lr'] == turn && board['lc'] == turn && board['ll'] == turn) {  // horiz lower
            won = true;
        } else if (board['ur'] == turn && board['cr'] == turn && board['lr'] == turn) {  // vert right
            won = true;
        } else if (board['ul'] == turn && board['cl'] == turn && board['ll'] == turn) {  // vert left
            won = true;
        } else if (board['cc'] == turn && board['uc'] == turn && board['lc'] == turn) {  // vert center
            won = true;
        } else if (board['ul'] == turn && board['cc'] == turn && board['lr'] == turn) {  // diagonal \
            won = true;
        } else if (board['ur'] == turn && board['cc'] == turn && board['ll'] == turn) {  // diagonal /
            won = true;
        }

        if (won == true) {
            // Perform scoring
            if (turn == 1) {
                scorePlayer1 = scorePlayer1 + 1;
                document.getElementById("score-1").innerHTML = scorePlayer1;
            } else {
                scorePlayer2 = scorePlayer2 + 1;
                document.getElementById("score-2").innerHTML = scorePlayer2;
            }

            reset();
        } else {
            // Check if there is a tie
            turns = turns + 1;
            if (turns == 9) { // tie!
                reset();
            } else { // Switch turns
                if (turn == 1) {
                    turn = 2;
                } else {
                    turn = 1;
                }
            }
        }
    }
}
