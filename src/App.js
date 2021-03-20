import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./user.json";
import stats from "./statistical-data.json";
const title = "Заголовок";
const App = () => {
  return (
    <>
      {/* Рендеринг профиля */}

      <Profile
        src={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />
      {/* <Statistics stats={stats} /> */}
    </>
  );
};

export default App;
