import React, { Component } from "react";
import Counter from "./Counter";
import JokeText from "./JokeText";
import JokeEmoji from "./JokeEmoji";
import "./Joke.scss";
export default class Joke extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Joke">
        <Counter
          handleVote={this.props.handleVote}
          id={this.props.id}
          count={this.props.count}
        />
        <JokeText jokeText={this.props.jokeText} />
        <JokeEmoji votes={this.props.count} />
      </div>
    );
  }
}
