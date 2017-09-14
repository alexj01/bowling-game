class BowlingGame {
    constructor(){
        this.playerCount;
        this.players = [];
        this.rolls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10]
        this.frame = 0;
    }

    greet() {
        return 'Hello! Welcome to the Bowling Game.'        
    }

    setPlayerCount(numberOfPlayers) {
        this.playerCount = parseInt(numberOfPlayers)
    }

    getPlayerCount() {
        return this.playerCount;
    }

    generatePlayers() {
        for(let i = 1; i <= this.getPlayerCount(); i ++) {
            this.players.push({'playerId': i, 'score': 0})
        }
    }

    getPlayer(playerId) {
        return this.players[playerId];
    }

    nextFrame() {
        this.frame++;
    }

    getCurrentFrame() {
        return this.frame;
    }

    roll(pins, playerId) {
        let player = this.getPlayer(playerId)
        player.score += pins;
    }

    getPlayerScore(playerId) {
        let player = this.getPlayer(playerId)
        return player.score;
    }
}

module.exports = BowlingGame;