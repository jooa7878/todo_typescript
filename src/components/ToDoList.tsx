import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = Categories;
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        <option value={categories.TO_DO}>To Do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
