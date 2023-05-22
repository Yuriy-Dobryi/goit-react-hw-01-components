import PropTypes from "prop-types";
import css from './FriendListItem.module.css';

export const FriendListItem =
  ({ friend: { avatar, name, isOnline } }) => 
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </>

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
};