import { useSetRecoilState } from "recoil";
import { CategoryType, ITodo, todoState } from "../atom";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== CategoryType.TODO && (
        <button name={CategoryType.TODO} onClick={onClick}>
          To do
        </button>
      )}
      {category !== CategoryType.DOING && (
        <button name={CategoryType.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== CategoryType.DONE && (
        <button name={CategoryType.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default Todo;
