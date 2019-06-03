import React from "react";
import "./JokeText.scss";
function JokeText(props) {
  return (
    <div className="JokeText">
      <p>{props.jokeText}</p>
    </div>
  );
}
export default JokeText;
