import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

class StatData extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
  };

  render() {
    
    return (
      <>
        <StatList>
          <StatItem> Good: {this.props.good}</StatItem>
          <StatItem> Neutral: {this.props.neutral}</StatItem>
          <StatItem> Bad: {this.props.bad}</StatItem>
          <StatItem> Total: {this.props.total}</StatItem>
          <StatItem> Positive: {this.props.positive} %</StatItem>
        </StatList>
      </>
    );
  }
}

export default StatData;
