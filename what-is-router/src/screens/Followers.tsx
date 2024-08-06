import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  name: string;
}
function Followers() {
  const { name } = useOutletContext<IFollowersContext>();
  return (
    <>
      <h1>{name}'s followers:</h1>
    </>
  );
}
export default Followers;
