import React from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

const Home: React.FC = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();
  setTimeout(() => {
    setURLSearchParams({
      today: "2024-08-05",
      tomorrow: "2024-08-06",
    });
  }, 3000);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Users</h2>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              <Link to={`/users/${u.id}`}>{u.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
