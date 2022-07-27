import { ChangeEvent, FormEvent, useState } from "react";

import type { Todo } from "../types/Todo.type";

import IconPlusCircle from "../assets/icon-plus-circle.svg";

import styles from "./Form.module.css";

type FormProps = {
  onAddNewTask: (task: Todo) => void;
};

const generateId = () => Math.floor(new Date().getTime() + Math.random() * 100);

export const Form = ({ onAddNewTask }: FormProps) => {
  const [newTask, setNewTask] = useState("");

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTask.length > 0) {
      const newTaskItem: Todo = {
        id: generateId(),
        description: newTask,
        completed: false,
      };

      onAddNewTask(newTaskItem);
      setNewTask("");
    }
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setNewTask(target.value);

  return (
    <form onSubmit={handleAddNewTask} className={styles.form}>
      <input
        type="text"
        aria-label="Adicione uma nova tarefa"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">
        Criar
        <img src={IconPlusCircle} alt="+" />
      </button>
    </form>
  );
};
