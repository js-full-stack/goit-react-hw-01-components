import defaultImg from "./images/defaultImg.jpg";
import propTypes from "prop-types";

const Profile = ({ src, name, tag, location, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={src} alt={name} className="avatar" width="250" />
      <p className="App">Имя пользователя: {name}</p>
      <p className="tag">Тэг: {tag}</p>
      <p className="location">Location: {location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views </span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label"> Likes </span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  src: defaultImg,
};

Profile.propTypes = {
  src: propTypes.string,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};

export default Profile;
