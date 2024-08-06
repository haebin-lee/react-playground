import React from "react";
import { users } from "../db";
import { Link } from "react-router-dom";
import User from "./User";

const Home: React.FC = () => {
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
