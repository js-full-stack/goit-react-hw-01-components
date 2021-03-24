import defaultImg from '../images/defaultImg.jpg';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';
const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ id, isOnline, avatar, name }) => {
      // console.log(friends);
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
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;

// friend: propTypes.shape({
//   avatar: propTypes.string,
//   id: propTypes.string.isRequired,
//   isOnline: propTypes.bool.isRequired,
//   name: propTypes.string.isRequired,
// }),
