import { MainWrapper } from './MainWrapper/MainWrapper';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {user, stats, friends} from '../json';

export const App = () => {
  return (
    <div className='container'>
      
      <MainWrapper>
        <Profile user={user} />
      </MainWrapper>

      <MainWrapper>
        <Statistics stats={stats} title="Upload stats" />
      </MainWrapper>

      <MainWrapper>
        <FriendList friends={friends} />
      </MainWrapper>

    </div>
  );
};