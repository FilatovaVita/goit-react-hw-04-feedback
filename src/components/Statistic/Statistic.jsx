import PropTypes from 'prop-types';
import { StatParagraph } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatParagraph>Good: {good}</StatParagraph>
      <StatParagraph>Neutral: {neutral}</StatParagraph>
      <StatParagraph>Bad: {bad}</StatParagraph>
      <StatParagraph>Total: {total}</StatParagraph>
      <StatParagraph>Positive feedback: {positivePercentage}%</StatParagraph>
    </div>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
