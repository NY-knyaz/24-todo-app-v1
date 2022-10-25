import { RiTodoFill } from 'react-icons/ri'; //імпорт значків
import styles from './Todo.module.css';

function Todo({ text, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </div>
    </div>
  );
}

export default Todo;
