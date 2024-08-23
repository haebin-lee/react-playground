import { atom, selector } from "recoil";

export enum CategoryType {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  text: string;
  id: number;
  category: CategoryType;
}

export const todoState = atom<ITodo[]>({ key: "todos", default: [] });

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((t) => t.category === category);
  },
});
export const categoryState = atom<CategoryType>({
  key: "category",
  default: CategoryType.TODO,
});
