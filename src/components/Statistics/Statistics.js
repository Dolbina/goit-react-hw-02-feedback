import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total: 0, positivePercentage: 0, }) => {
  return ((total === 0) ? (<p>There is no feedback</p>) :
    (<div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {this.countTotalFeedback(this.state)}</p>
      <p>
        Positive feedback: {this.countPositiveFeedbackPercentage(this.state)}
        %
      </p>
    </div>)
  )
};

Statistics.protoType={
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}