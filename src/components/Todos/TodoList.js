import Todo from './Todo.js';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  // ↑ Одразу ж проводимо деструктуризацію

  // return todos.map((todo, index) => <Todo key={index} text={todo})
  return (
    <div className={styles.todoListContainer}>
      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((text, index) => (
          <Todo text={text} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
