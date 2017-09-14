import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import application from '../src/app/application';

describe('Application Tests', () => {

    describe('Initialization', () => {
        
        let greeting = application.gameStart();
        
        it('should say hello when started', () => {
            expect(greeting).to.equal('Hello! Welcome to the Bowling Game.')
        })

    })

})