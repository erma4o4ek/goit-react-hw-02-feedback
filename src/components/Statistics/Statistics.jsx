
import PropType from 'prop-types';
import style from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <ul className={style.list}>
        <li className={style.item}>Good:{good}</li>
        <li className={style.item}>Neutral:{neutral}</li>
        <li className={style.item}>Bad:{bad}</li>
        <li className={style.item}>Total:{total}</li>
        <li className={style.item}>Positive feedback:{positivePercentage} %</li>
      </ul>  
  );
};

Statistics.PropType = {
  good: PropType.number.isRequired,
  neutral: PropType.number.isRequired,
  bad: PropType.number.isRequired,
  total: PropType.number.isRequired,
  positivePercentage: PropType.number.isRequired,
};

export default Statistics;