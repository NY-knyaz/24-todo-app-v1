import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState(''); //для тримання стану тексту з поля input

  const onSubmitHandler = (event) => {
    /*завдяки цій функ submit не пересилає нас на іншу сторінку*/
    event.preventDefault();
    addTodo(text); //надсилає текст в масив в App
    setText(''); //занулення змінної text
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => {
            setText(
              e.target.value
            ); /* прикожному новому символі стається ре-рендеринг */
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
