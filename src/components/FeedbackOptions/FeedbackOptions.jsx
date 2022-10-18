import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          value={option}
          type="button"
          onClick={(option) => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
// class FeedbackOptions extends Component {

//   static defaultProps = {
//     options: [],
//   };

//   static propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
//   };
//   render() {
//     return (
//       <div>
//         {this.props.options.map(button => (
//           <button
//             key={button}
//             value={button}
//             type="button"
//             onClick={button => this.props.onLeaveFeedback(button)}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//     );
//   }
// };
// export default FeedbackOptions;