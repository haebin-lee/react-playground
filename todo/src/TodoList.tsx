import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, CategoryType, todoSelector } from "./atom";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function ToDoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <select onInput={onInput}>
        <option value={CategoryType.TODO}>To Do</option>
        <option value={CategoryType.DOING}>Doing</option>
        <option value={CategoryType.DONE}>DONE</option>
      </select>
      <CreateTodo />
      {todos?.map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </div>
  );
}
export default ToDoList;
