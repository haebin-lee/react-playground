import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onClickAbout = () => {
    navigate("/about"); // for redirection
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {/* <Link to={"/about"}>About</Link> */}
            <button onClick={onClickAbout}>About</button>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
