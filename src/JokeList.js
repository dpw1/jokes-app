import React, { Component } from "react";
import axios from "axios";
import FlipMove from "react-flip-move";
import uuid from "uuid/v4";
import Joke from "./Joke";
import Loader from "./Loader";
import "./JokeList.scss";

export default class JokeList extends Component {
  static defaultProps = {
    howManyJokesToLoad: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(e => e.joke));

    this.handleVote = this.handleVote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.loadNewJokes();
    }
  }

  async loadNewJokes() {
    try {
      let jokes = [];

      while (jokes.length < this.props.howManyJokesToLoad) {
        let { data } = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        });

        if (!this.seenJokes.has(data.joke)) {
          jokes.push({ joke: data.joke, id: uuid(), votes: 0 });
        } else {
        }
      }

      this.setState(
        prevState => ({
          jokes: [...prevState.jokes, ...jokes],
          loading: false
        }),
        () => {
          window.localStorage.setItem(
            "jokes",
            JSON.stringify(this.state.jokes)
          );
        }
      );
    } catch (err) {
      alert("Something went wrong.");
      this.state.loading({ loading: false });
    }
  }

  handleVote(id, vote) {
    const joke = this.state.jokes.filter(joke => joke.id === id)[0];

    const updatedJoke = {
      ...joke,
      votes: Number((joke.votes += vote))
    };

    this.setState(
      prevState => ({
        ...prevState.jokes,
        updatedJoke
      }),
      () => {
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
      }
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.loadNewJokes);
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Best</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Smily face"
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Load More Jokes
          </button>
        </div>
        <section className="JokeList-jokes">
          <FlipMove enterAnimation="fade" leaveAnimation="fade">
            {this.state.jokes
              .sort((a, b) => b.votes - a.votes)
              .map(e => (
                <Joke
                  id={e.id}
                  key={e.id}
                  count={e.votes}
                  jokeText={e.joke}
                  handleVote={this.handleVote}
                />
              ))}
          </FlipMove>
          {this.state.loading &&
            Array.from({ length: this.props.howManyJokesToLoad }).map(_ => (
              <Loader key={uuid()} />
            ))}
        </section>
      </div>
    );
  }
}
