import { memo } from "react";

const HookCallBack = ({ todos, addTodo }) => {

    console.log("child render");

    return (
        <>
            <h2>Hijo</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(HookCallBack);
