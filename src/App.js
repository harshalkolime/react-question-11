import { useReducer, useState } from 'react'
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload]
  } else {
    return state.filter((todo, index) => index !== action.payload)
  }
}

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = () => {
    if (todoTitle === "") {
      alert("Title field cannot be empty")
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: todoTitle
    })
    setTodoTitle('');
  }

  const deleteTodo = (index) => {
    dispatch({
      type: "DELETE_TODO",
      payload: index
    })
  }

  return (
    <div className='container' >
      <h1 > Todo  </h1>
      <div >
        <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} placeholder='Create a Todo list.....' />
        <button onClick={handleSubmit} >Create</button>
      </div>
      {
        todos && todos.map((todo, index) => {
          return <div key={index}  className='task'>
            <h2  >{todo}</h2>
            <button onClick={() => deleteTodo(index)} >☑️</button>
          </div >
        })
      }
    </div>
  );
}

export default App;
