// components
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// data json
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friend-list.json';
import transactions from './data/transactions.json';

const App = () => (
  <Container>
    {/* tack-1 */}
    <Profile
      src={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />

    {/* tack-2 */}
    <Statistics title="Upload stats" stats={stats} />
    {/* <Statistics stats={stats} /> */}

    {/* tack-3*/}
    <FriendList friends={friends} />

    {/* tack-4 */}
    <TransactionHistory items={transactions} />
  </Container>
);

export default App;
