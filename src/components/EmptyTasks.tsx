import IconClipboard from "../assets/icon-clipboard.svg";

import styles from "./EmptyTasks.module.css";

export const EmptyTasks = () => {
  return (
    <p className={styles.emptyMessage}>
      <img src={IconClipboard} alt="ícone de clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      Crie tarefas e organize seus itens a fazer
    </p>
  );
};
