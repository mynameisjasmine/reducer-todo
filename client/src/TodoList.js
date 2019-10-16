import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    console.log(props);
    return (
    <div>
   {props.state.data.map(items => <Todo key={items.id} items={items} dispatch={props.dispatch} toggleTask={props.toggleTask} itemCompleted={items.completed}/> )}
    </div>

    )

}
export default TodoList;