import { React, Component } from 'react';
import PropTypes from 'prop-types';
import Section from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = event => {
    const currentButton = event.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentButton]: prevState[currentButton] + 1,
    }));
  };
  // handleCountGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // handleCountNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  // handleCountBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </Section>
      </div>
    );
  }
}

export default App;
