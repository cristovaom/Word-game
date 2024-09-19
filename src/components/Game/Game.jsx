import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);
  const [disabledInputs, setDisabledInputs] = React.useState(false);
  const[inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    console.log(guess)
  },[guess])
  function handleSubmit(event){
    event.preventDefault();
    if (!disabledInputs && inputValue.length === 5) {
      setGuess([...guess, inputValue]); 
      setInputValue(""); 
    }
  }
  return (
    <>
     <form class="guess-input-wrapper" onSubmit={handleSubmit}>

        <div class="guess-results">
        {guess && guess.map((letter, index) => (
              <p key={index}>Your guess: {letter}</p>
            ))}
          
        </div>
      
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" onChange={(event) => {
            const input = event.target.value.toUpperCase();
            if (input.length > 5) {
              setDisabledInputs(true);
            } else {
              setDisabledInputs(false);
              setInputValue(input);
            }
          }} style={{textTransform: "uppercase"}}/>
      {disabledInputs && <span style={{color: 'red'}}>Minimo de 5 caracteres e maximo de 5 tambem</span>}
    </form>
    </>
  )
}

export default Game;
