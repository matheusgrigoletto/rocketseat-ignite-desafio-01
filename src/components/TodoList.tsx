import { useState } from "react";

import type { Todo } from "../types/Todo.type";
import { Form } from "./Form";
import { EmptyTasks } from "./EmptyTasks";
import { TodoListInfo } from "./TodoListInfo";
import { TodoListTasks } from "./TodoListTasks";

import styles from "./TodoList.module.css";

const TODOS: Todo[] = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur reiciendis vitae ducimus.",
    completed: false,
  },
  {
    id: 2,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false,
  },
  {
    id: 3,
    description:
      "Consequuntur facere quidem hic veniam modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    completed: true,
  },
  {
    id: 4,
    description:
      "Pariatur id sit aspernatur corporis, ut nesciunt perferendis quisquam eos, enim ea obcaecati ad totam illum",
    completed: true,
  },
  {
    id: 5,
    description:
      "Saepe reprehenderit deleniti voluptate laboriosam magnam. Dolore voluptatibus obcaecati, maiores odio quibusdam modi.",
    completed: true,
  },
];

export const TodoList = () => {
  const [items, setItems] = useState<Todo[]>(TODOS);

  const total = items.length;
  const isEmpty = total === 0;
  const totalCompleted = items.filter((item) => item.completed).length;

  const handleAddNewTask = (task: Todo) => {
    setItems((prevState) => [task, ...prevState]);
  };

  const handleToggleCompleted = (taskId: number, completed: boolean) => {
    const index = items.findIndex((item) => item.id === taskId);

    if (index > -1) {
      const itemsClone = [...items];
      itemsClone[index].completed = completed; // ou itemsClone[index].completed = !itemsClone[index].completed
      setItems(() => [...itemsClone]);
    }
  };

  const handleRemoveTask = (taskId: number) => {
    const index = items.findIndex((item) => item.id === taskId);

    if (index > -1) {
      const itemsClone = [...items];
      itemsClone.splice(index, 1);
      setItems(() => [...itemsClone]);
    }
  };

  return (
    <>
      <Form onAddNewTask={handleAddNewTask} />
      <article className={styles.todolist}>
        <header>
          <TodoListInfo total={total} completed={totalCompleted} />
        </header>
        <section>
          {isEmpty && <EmptyTasks />}
          {!isEmpty && (
            <TodoListTasks
              items={items}
              onToggleCompleted={handleToggleCompleted}
              onRemoveTask={handleRemoveTask}
            />
          )}
        </section>
      </article>
    </>
  );
};
