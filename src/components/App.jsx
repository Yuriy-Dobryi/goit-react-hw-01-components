import { MainWrapper } from './MainWrapper/MainWrapper';
import { Profile } from './Profile/Profile';

import userData from '../user.json';

export const App = () => {
  return (
    <MainWrapper>
      <Profile profile={userData} />
    </MainWrapper>
  );
};