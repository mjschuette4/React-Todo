// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.items.map(a => (
                <Todo
                handleToggleOn={props.handleToggleOn}
                key={a.id}
                item={a}
                />
            ))}
        </div>
    )
}
export default TodoList;