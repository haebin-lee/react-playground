import { useParams } from "react-router-dom";

interface Parameters {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<Parameters>();

  return <h1>{coinId}</h1>;
}
export default Coin;
