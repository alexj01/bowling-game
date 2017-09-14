import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import BowlingGame from '../src/app/application';

describe('Application Tests', () => {

    describe('Initialization', () => {
        let game = new BowlingGame();
        let greeting = game.greet();
        game.setPlayerCount(2)
        game.generatePlayers()
        
        it('should say hello when started', () => {
            expect(greeting).to.equal('Hello! Welcome to the Bowling Game.')
        })
        
        it('should accept an input of the number of players', () => {
            expect(game.getPlayerCount()).to.equal(2)
        })
        
        it('should generate players to match the player count', () => {
            expect(game.players.length).to.equal(game.getPlayerCount())
        })

        it('should advance the frame', () => {
            expect(game.getCurrentFrame()).to.equal(0)

            game.nextFrame()

            expect(game.getCurrentFrame()).to.equal(1)
        })

        it('should update the score after a roll', () => {
            let pins = 4;
            let playerId = 1
            game.roll(pins,playerId)
            expect(game.getPlayerScore(playerId)).to.equal(pins)
        })

    })

})