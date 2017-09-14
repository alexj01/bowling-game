class BowlingGame {
    constructor(){
        this.playerCount;
        this.players = [];
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
        this.getPlayer(playerId).score += pins;
    }

    getPlayerScore(playerId) {
        let player = this.getPlayer(playerId)
        return player.score;
    }


}

module.exports = BowlingGame;