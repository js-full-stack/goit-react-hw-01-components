import propTypes from "prop-types";

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    <h2>{title}</h2>

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {};

// // *Дефолты прописываются для необязательных пропсов
// Statistics.propTypes = {
//   title: propTypes.string,
//   // label: propTypes.string,
//   percentage: propTypes.string.isRequired,
//   id: propTypes.string.isRequired,
// };

export default Statistics;
