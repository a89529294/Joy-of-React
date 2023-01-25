import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  // result = [{letter:'H',status:'correct'},...] if guess exist
  // result = null if guess is undefined

  return (
    <p className="guess">
      {range(5).map((idx) => (
        <span className={`cell ${guess ? result[idx].status : ""}`} key={idx}>
          {result ? result[idx].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
