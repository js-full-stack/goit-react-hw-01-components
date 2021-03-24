import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const friendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default friendList;
