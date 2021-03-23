import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const friendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default friendList;
