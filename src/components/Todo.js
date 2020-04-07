import React from "react";

const Todo = props => {
    return(
        <div 
        style={props.item.completed ? { textColor: 'red' } : null}
        onClick={() => props.handleToggleOn(props.item.id)}>
        {props.item.task}
        </div>
    );
};

export default Todo;