import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const myRef = React.useRef();
  console.log(myRef);

  const status = (() => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED && guesses[guesses.length - 1] !== answer) return "lose";
    if (guesses[guesses.length - 1] === answer) return "win";
    return "inprogress";
  })();

  const bannerSlot = (() => {
    switch (status) {
      case "inprogress":
        return null;
      case "win":
        return (
          <div
            className="happy banner"
            ref={(arg) => {
              console.log(arg);
            }}>
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
          </div>
        );
      case "lose":
        return (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>LEARN</strong>.
            </p>
          </div>
        );
      default:
        return null;
    }
  })();
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Input status={status} updateGuesses={(guess) => setGuesses((pv) => [...pv, guess])} />
      {bannerSlot}
    </>
  );
}

export default Game;
