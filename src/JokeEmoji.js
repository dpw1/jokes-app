import React from "react";
import Counter from "./Counter";
import JokeText from "./JokeText";
import "./JokeEmoji.scss";
export default function JokeEmoji(props) {
  function getEmoji() {
    if (props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (props.votes >= 12) {
      return "em em-laughing";
    } else if (props.votes >= 9) {
      return "em em-smiley";
    } else if (props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (props.votes >= 3) {
      return "em em-neutral_face";
    } else if (props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }
  return (
    <div className="JokeEmoji">
      <i className={`JokeEmoji-emoji ${getEmoji()}`} />
    </div>
  );
}
