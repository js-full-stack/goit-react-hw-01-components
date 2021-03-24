import styles from './Statistics.module.css';
import getRandomColor from './randomaizer';
import propTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title !== null ? <h2 className={styles.title}>{title}</h2> : null}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.statItem}
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
