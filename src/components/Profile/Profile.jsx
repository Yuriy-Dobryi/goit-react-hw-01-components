import css from './Profile.module.css';

export const Profile =
  ({ profile: { username, tag, location, avatar, stats:{followers, views, likes} } }) => (

    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={tag}
          className={css.avatar}
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{ tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css['stat-item']}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css['stat-item']}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css['stat-item']}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>

  );