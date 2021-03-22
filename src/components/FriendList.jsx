import FriendListItem from './FriendListItem';
const friendList = ({ friends }) => {
  return (
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default friendList;
