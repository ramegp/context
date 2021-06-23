import React, { useReducer, useState } from "react";


import { actionTypes, countRealizadas } from "./provider/reducer";
import { useStateValue } from "./provider/provider";

const App = () => {
  
  const [{ todos, cantidad }, dispatch] = useStateValue();

  const [text, setText] = useState();

  return (
     
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
        <div>Cantidad de items {cantidad} </div>  
      </form>
      
      <button onClick={()=> dispatch({type:'clear-all-todo'})}>Borrar todos los datos</button>
      <div>Lista de tareas:</div>
      <div>
        Realizadas {countRealizadas(todos)}
      </div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{
            textDecoration: t.completed ? "line-through" : "",
            color: t.completed ? "red" : "black",
            background: t.completed ? "grey" : "violet",
            fontSize: t.completed ? "20px":"16px"
          }}
        >
          {t.text}

          <label>
            <input type="checkbox" onChange={()=>(
              dispatch({type:"clear-selec-todo",text:t.text}))}/>
          </label>

        </div>
      ))}
    </div>
  );
};

export default App;