import React from "react";

const TodoForm = props => {
    return(
        <form>
            <input
                type = "text"
                name = "item"
                value = {props.value}
                onChange = {props.todoChange}
                placeholder = "Enter Task"
            />
            <button onClick = {props.handleAdd}>Add Task</button>
            <button onClick = {props.handleClear}>Clear selected</button>
        </form>
    );
};

export default TodoForm;