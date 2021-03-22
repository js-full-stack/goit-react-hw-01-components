import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friend-list.json';
import transactions from './data/transactions.json';
import { Fragment } from 'react';

const App = () => {
  return (
    <>
      <Fragment>
        {/* tack-1 */}
        <Profile
          src={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Fragment>

      {/* tack-2 */}
      <Fragment>
        <Statistics title="Upload stats" stats={stats} />
        {/* <Statistics stats={stats} /> */}
      </Fragment>

      {/* tack-3*/}
      <Fragment>
        <FriendList friends={friends} />
      </Fragment>

      {/* tack-4 */}
      <Fragment>
        <TransactionHistory items={transactions} />
      </Fragment>
    </>
  );
};

export default App;
