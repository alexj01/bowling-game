class BowlingGame {
    constructor(){
    this.currentRoll = 0;
    this.rolls = Array(21).fill(0);
}

    isSpare(rollIdx) {
        if(this.rolls[rollIdx] + this.rolls[rollIdx + 1] == 10) return true;
        else return false;
    };

    isStrike(rollIdx) {
        if(this.rolls[rollIdx] == 10) return true;
        else return false;
    } ;

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    };

    score() {
        var total = 0;
        var rollIdx = 0;
        for(var frame = 0; frame < 10; frame++) {
            try {
                if(this.rolls[rollIdx] <= 10 || this.rolls[rollIdx] + (this.rolls[rollIdx + 1]) < 20){
                    if(this.isStrike(rollIdx)) {
                        total += 10 + this.rolls[rollIdx + 1] + this.rolls[rollIdx + 2];
                        rollIdx++;
                    }
                    else if(this.isSpare(rollIdx)) {
                        total += 10 + this.rolls[rollIdx + 2];
                        rollIdx += 2;
                    } else {
                        total += this.rolls[rollIdx] + (this.rolls[rollIdx + 1])
                        rollIdx += 2;
                    }
                } else {
                    throw new Error('There was an issue with the score keeping. You cannot score more than 10 on a single roll, nor more than 20 on 2 rolls. Please recount.')
                }
            }   catch(error) {
                console.log(error);
                break;
            } 
        }
        // console.log(total);
        return total;
    }
}

let game = new BowlingGame();
// game.roll(4);
// game.roll(2);
// game.roll(1);
// game.roll(1);
// game.roll(5);
// game.roll(5);
// game.roll(10);

rollMany = function(n, pins) {
    for(var i = 0; i < n; i++) {
        game.roll(pins);
    }
}

rollMany(2,10)
game.roll(20)
game.roll(5)
game.roll(6)
console.log(game.score());

// strike = score + 10 + ro11 + roll
// 0 + 10 + 10 + 5 = 25

// strike = score + 10 + roll + roll
// 25 + 10 + 5 + 0 = 40

// pins = score + pins
// 40 + 5 = 45

// spare  = score + 10 + roll
// 45 + 10 + 6 = 61

// pins  =  score + pins
// 61 + 6 = 67