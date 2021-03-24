import defaultImg from '../images/defaultImg.jpg';
import propTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  src,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={src} alt={name} className={styles.avatar} width="250" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}> {location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Followers </span>
          <br />
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className="label">Views </span> <br />
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className="label"> Likes </span> <br />
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  src: defaultImg,
};

Profile.propTypes = {
  src: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};

// Profile.propTypes.arrayOf(
//  propTypes.object({
//    name: propTypes.string.isRequired,
//    tag: propTypes.string.isRequired,
//    location: propTypes.string.isRequired
//  })
// )

export default Profile;
