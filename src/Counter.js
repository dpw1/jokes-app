import React from "react";
import "./Counter.scss";
function Counter(props) {
  function handleUpvote() {
    props.handleVote(props.id, 1);
  }

  function getColor() {
    if (props.count >= 15) {
      return "#4CAF50";
    } else if (props.count >= 12) {
      return "#8BC34A";
    } else if (props.count >= 9) {
      return "#CDDC39";
    } else if (props.count >= 6) {
      return "#FFEB3B";
    } else if (props.count >= 3) {
      return "#FFC107";
    } else if (props.count >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }

  function handleDownvote() {
    props.handleVote(props.id, -1);
  }
  return (
    <div className="Counter">
      <button
        className="Counter-button Counter-button--positive"
        onClick={handleUpvote}
      >
        <i className="fas fa-arrow-up" />
      </button>
      <span>
        <span className="Counter-votes" style={{ borderColor: getColor() }}>
          {props.count}
        </span>
      </span>
      <button
        className="Counter-button Counter-button--negative"
        onClick={handleDownvote}
      >
        <i className="fas fa-arrow-down" />
      </button>
    </div>
  );
}
export default Counter;
