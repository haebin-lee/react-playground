import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

function User() {
  const { userId } = useParams();

  return (
    <>
      <h1>
        This is {users[Number(userId)].name} with id : {userId}
      </h1>
      <hr />
      <Link to={"followers"}> See followers</Link>
      <Outlet
        context={{
          name: users[Number(userId)].name,
        }}
      />
    </>
  );
}
export default User;
