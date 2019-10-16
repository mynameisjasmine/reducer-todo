import React from 'react';

const Todo = props => {
 return (
<div onClick={() => props.toggleTask(props.items.id)}
className={props.items.completed ? "completed" : ""}>
<p>{props.items.item}</p>

</div>
// {/* <div onClick={props.dispatch({action: 'Toggle_Task', payload: props.items.id})}>
// {props.items.item}
// </div> */}

 );
};
export default Todo;