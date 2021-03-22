const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id}>
        <span className="status">{isOnline ? 'Онлайн' : 'Оффлайн'}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </>
);

export default FriendListItem;
