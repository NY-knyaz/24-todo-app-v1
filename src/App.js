import { useState } from 'react';
//рекомендовано добавляти з зовнішніх модулів npm зверху файлу
//а нижче вже локальні імпорти з вашого додатку
import './App.css';
import TodoForm from './components/Todos/TodoForm.js';
//import Button from './components/UI/Button.js';
import TodoList from './components/Todos/TodoList.js';

function App() {
  /*добавляємо стан компонента саме в батьківський клас App,
  адже в дочірніх елементах TodoForm (ми будемо добавляти нові задачі)
  і TodoList (ми будемо відображати їх в інтерфейсі) 
  ми зможемо його(стан) передавати по дереву */
  const [todos, setTodos] = useState([]); // <-- пустий масив

  // фції з Handler, передаються через властивості(props) в компоненти
  const addTodoHandler = (text) => {
    //↑ обробник оновлення нової задачі
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
    //--перший парам - значення елемента в масиві
    //(оск ми не викорис перший парм фції, то він буде записаний як'_')
    //--другий парам - індекс елемента в масиві
    //(idx скр. index, аби запобігти плутанині з вхідним параметром index)
    //filter працює так, що елемент залиш в масиві, якщо коллбек фція вертає true
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
