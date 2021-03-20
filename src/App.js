import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./user.json";
import stats from "./statistical-data.json";
import { Fragment } from "react";

const App = () => {
  return (
    <>
      {/* Рендеринг профиля */}
      <Fragment>
        <Profile
          src={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Fragment>

      {/* Рендеринг таблицы со статистикой */}
      <Fragment>
        {stats.map(() => (
          <Statistics title={user.title} stats={user.stats} />
        ))}
      </Fragment>
    </>
  );
};

export default App;

//  ?name — имя пользователя
// ?tag — тег в социальной сети без @
// ?location — город и страна
// ?avatar — url на изображение
// ?stats — объект с информацией об активности
// /   <div>
//     <h1>Hello React!</h1>
//     <Profile
//       src={user.avatar}
//       name={user.name}
//       tag={user.tag}
//       location={user.location}
//       stats={user.stats}
//     />
//   </div>
