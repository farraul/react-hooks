import Header from "../components/adhoc/header";
import { useState, useCallback } from "react";
import HookCallBack from "../components/adhoc/hookcallback";

/* 
Ahora el hijo no se ejectuta de nuevo si no cambia su hook, es decir una de sus props
*/

const UseCallBack = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  /* En la función de abajo al setear setTodos redenderiza todo el componente de nuevo */
  /*   
  const addTodo = () => {
    console.log("entro")
    setTodos((t) => [...t, "New Todo"]);
  };
  */

  /*Solución con useCallBack, esta a la escucha del hook: [todos]*/
  const addTodo = useCallback(() => {
    console.log("entro en el callback")
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Header />
      <div className="use-call-back">
        <HookCallBack todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          <h2>Padre</h2>
          {count}
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>

  )
}

export default UseCallBack;