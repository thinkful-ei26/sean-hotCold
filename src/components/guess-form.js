import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {
    function formSubmit(event) {
        event.preventDefault();
        props.setGuessHistory();
        document.getElementById('userGuess').value = '';
    };
    
    return (
        <form onSubmit={event => formSubmit(event)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required onChange={event => props.setCurrentGuess(event)} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
};
