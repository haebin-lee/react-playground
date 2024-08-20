import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="Write a to do " />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  firstName: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: any) => {
    console.log(data);
    setError("extraError", { message: "Server is shut down." });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
              message: "Only gmail.com is allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message?.toString()}</span>
        <input
          {...register("firstName", {
            validate: {
              noLucy: (v) => (!v.includes("lucy") ? "No lucy includes" : true),
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message?.toString()}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message?.toString()}</span>
      </form>
    </div>
  );
}
export default ToDoList;
