import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(e.currentTarget.value));
  };
  const onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(Number(e.currentTarget.value));
  };
  return (
    <>
      <input
        type="number"
        placeholder="minutes"
        value={minutes}
        onChange={onMinuteChange}
      />
      <input
        type="number"
        placeholder="hours"
        value={hours}
        onChange={onHourChange}
      />
    </>
  );
}
export default App;
