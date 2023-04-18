import { Component } from "react";



export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  feedbackCounterGood = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
    
  };

  feedbackCounterNeutral = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  feedbackCounterBad = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const positiveFeedbackPercentage = total === 0 ? 0 : Math.round((good / total) * 100);
    console.log(positiveFeedbackPercentage);
    this.setState({ percentage: positiveFeedbackPercentage
    });
  };

  render() {
    const { good, neutral, bad, total, percentage } = this.state;

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
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {percentage} %</p>
      </div>
    );
  }
}
