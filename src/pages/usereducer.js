import Header from "../components/adhoc/header";
import { useReducer } from "react";


const UseReducer = () => {

    const initialTodos = [
        {
            id: 1,
            title: "Tarea 1",
            complete: false,
            prioridad: 1
        },
        {
            id: 2,
            title: "Tarea 2",
            complete: false,
            prioridad: 1
        },
    ];

    const reducer = (state, action) => {

        console.log("state:", state);
        /*  [0: { id: 1, title: 'Tarea 1', complete: false, prioridad: 1 }
             1: { id: 2, title: 'Tarea 2', complete: false, prioridad: 1 }] */
        console.log("action:", action);
        /*  {e: SyntheticBaseEvent { _reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input.user - reducer__priority, … }
             id: 1
             type: "PRIORIDAD"} */

        const inputValuePriority = action?.e?.target.value;

        switch (action.type) {
            case "COMPLETE":
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: !todo.complete };
                    } else {
                        return todo;
                    }
                });

            case "PRIORIDAD":

                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, prioridad: inputValuePriority }
                    } else {
                        return todo;
                    }
                });

            default:
                return state;
        }
    };


    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };


    const handlePriority = (todo, e) => {
        dispatch({ type: "PRIORIDAD", id: todo.id, e: e });
    };

    return (
        <>
            <Header />
            <div className="user-reducer">
                {todos.map((todo) => (
                    <div key={todo.id} className="user-reducer__block-properties">
                        <div>
                            {todo.title}:
                        </div>
                        <div className="user-reducer__each-properties">
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo)}
                            />
                            Estado
                        </div>
                        <div className="user-reducer__each-properties">
                            <input
                                type="number"
                                className="user-reducer__priority"
                                placeholder={todo.prioridad}
                                onChange={(e) => handlePriority(todo, e)}
                            />
                            Prioridad
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UseReducer;