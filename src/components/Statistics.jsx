import propTypes from 'prop-types';

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    {title !== null ? <h2>{title}</h2> : null}

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};

export default Statistics;
