import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducer.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      Users:{" "}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
