import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const answerClasses = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((idx) => (
        <span className={`cell ${guess ? answerClasses[idx].status : ""}`} key={idx}>
          {guess ? guess[idx] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
