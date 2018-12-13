import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            currentGuess: '',
            guessHistory: [],
            feedback: 'Make your guess!',
        };
    }

    setCurrentGuess(event) {
        this.setState({currentGuess: event.target.value});
    }
    setGuessHistory() {
        this.setState({
            currentGuess: '',
            guessHistory: [...this.state.guessHistory, this.state.currentGuess]
        });
    }
    setFeedback() {}
    
    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} setCurrentGuess={event => this.setCurrentGuess(event)} setGuessHistory={() => this.setGuessHistory()}/>
                <GuessCount count={this.state.guessHistory.length}/>
                <GuessList guesses={this.state.guessHistory}/>
            </div>
        );
    }
}
