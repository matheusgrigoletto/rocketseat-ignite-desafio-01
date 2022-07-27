import { ChangeEvent } from "react";

import { Todo } from "../types/Todo.type";

import styles from "./TodoListTasks.module.css";

type TodoListTasksProps = {
  items?: Todo[];
  onToggleCompleted: (taskId: number, completed: boolean) => void;
  onRemoveTask: (taskId: number) => void;
};

export const TodoListTasks = ({
  items = [],
  onToggleCompleted,
  onRemoveTask,
}: TodoListTasksProps) => {
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted(+target.value, target.checked);
  };

  return (
    <>
      <ul className={styles.todoListTasks}>
        {items.map((task) => {
          const taskId = `task-${task.id}`;
          return (
            <li
              key={task.id}
              className={task.completed ? styles.taskCompleted : ""}
            >
              <div>
                <input
                  type="checkbox"
                  name={taskId}
                  id={taskId}
                  value={task.id}
                  checked={task.completed}
                  onChange={handleInputChange}
                />
                <label htmlFor={taskId} aria-label="Alterar estado da tarefa" />
              </div>
              <span>{task.description}</span>
              <button type="button" onClick={() => onRemoveTask(task.id)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
