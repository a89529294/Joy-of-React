import React, { useState } from "react";

function Input({ updateGuesses, status }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuesses(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="input"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={(status === "win") | "lose"}
        // minLength={5}
        maxLength={5}
        pattern=".{5,10}"
        required
      />
    </form>
  );
}

export default Input;
