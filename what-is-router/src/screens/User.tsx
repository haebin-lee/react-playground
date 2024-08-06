import { useParams } from "react-router-dom";
import { users } from "../db";

function User() {
  const { userId } = useParams();

  return (
    <>
      <h1>
        This is {users[Number(userId)].name} with id : {userId}
      </h1>
      <div></div>
    </>
  );
}
export default User;
