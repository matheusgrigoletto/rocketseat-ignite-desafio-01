import styles from "./TodoListInfo.module.css";

type TodoListInfoProps = {
  total?: number;
  completed?: number;
};

export const TodoListInfo = ({
  total = 0,
  completed = 0,
}: TodoListInfoProps) => {
  return (
    <>
      <div className={styles.taskCount}>
        <strong>Tarefas criadas</strong>
        <span>{total}</span>
      </div>
      <div className={styles.taskCompleted}>
        <strong>Concluídas</strong>
        {completed > 0 && (
          <span>
            {completed} de {total}
          </span>
        )}
        {completed === 0 && <span>0</span>}
      </div>
    </>
  );
};
