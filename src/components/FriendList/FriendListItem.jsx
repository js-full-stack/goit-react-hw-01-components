import defaultImg from '../images/defaultImg.jpg';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ id, isOnline, avatar, name }) => {
      return (
        <li
          className={styles.friendItem}
          styles={
            isOnline
              ? { backgroundColor: '#111111' }
              : { backgroundColor: 'blue' }
          }
          key={id}
        >
          {isOnline ? (
            <span className={styles.online}>status</span>
          ) : (
            <span className={styles.offline}>status</span>
          )}
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.friendName}>{name}</p>
        </li>
      );
    })}
  </>
);

FriendListItem.defaultProps = {
  src: defaultImg,
};

FriendListItem.propTypes = {
  src: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};

export default FriendListItem;
