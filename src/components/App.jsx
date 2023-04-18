import { Component } from 'react';
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounterGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  feedbackCounterNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  feedbackCounterBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return this.state.good + this.state.neutral + this.state.bad === 0
      ? 0
      : Math.round(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100
        );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.feedbackCounterGood}>
          Good
        </button>
        <button type="button" onClick={this.feedbackCounterNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.feedbackCounterBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )} ></Statistics>
      </div>
    );
  }
}