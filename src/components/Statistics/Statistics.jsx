import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

const StatData = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <StatList>
        <StatItem> Good: {good}</StatItem>
        <StatItem> Neutral: {neutral}</StatItem>
        <StatItem> Bad: {bad}</StatItem>
        <hr />
        <StatItem> Total: {total}</StatItem>
        <StatItem> Positive: {positive} %</StatItem>
      </StatList>
    </>
  );
};
export default StatData;

StatData.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

// class StatData extends Component {

//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positive: 0,
//   };

//   static propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positive: PropTypes.number.isRequired,
//   };

//   render() {

//     return (
//       <>
//         <StatList>
//           <StatItem> Good: {this.props.good}</StatItem>
//           <StatItem> Neutral: {this.props.neutral}</StatItem>
//           <StatItem> Bad: {this.props.bad}</StatItem>
//           <hr/>
//           <StatItem> Total: {this.props.total}</StatItem>
//           <StatItem> Positive: {this.props.positive} %</StatItem>
//         </StatList>
//       </>
//     );
//   }
// }
