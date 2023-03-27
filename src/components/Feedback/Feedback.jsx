import PropTypes from 'prop-types';
import { OptionsWrapper } from './Feedback.styled';
import { Button } from './Button.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {Object.values(options).map(item => (
        <Button
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
