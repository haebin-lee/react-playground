import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hour",
  get: ({ get }) => {
    const minute = get(minuteState);
    return Math.floor(minute / 60);
  },
  set: ({ set }, newValue) => {
    set(minuteState, Number(newValue) * 60);
  },
});
