import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class StatData extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  // сучасний короткий запис babel трансформирует

  state = { value: this.props.initialValue };
  handleIncrement = () => {
    this.setState(prevState => {
      // prevState актуальное состояние на текущий момент
      return {
        value: prevState.value + 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <FeedbackOptions onIncrement={this.handleIncrement} />
        <span>{value}</span>
      </div>
    );
  }
}
export default StatData;
