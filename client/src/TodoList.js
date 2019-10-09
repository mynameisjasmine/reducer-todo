import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    console.log(props);
    return (
    <div className="completed">
   {props.state.data.map(items => <Todo key={items.id} items={items} dispatch={props.dispatch} itemCompleted={items.completed}/> )}
    </div>

    )

}
export default TodoList;