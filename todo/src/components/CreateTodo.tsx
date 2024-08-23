import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atom";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    console.log(todo);
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please write a Todo",
        })}
        placeholder="Write a to do "
      />
      <button>Add</button>
    </form>
  );
}
export default CreateTodo;
