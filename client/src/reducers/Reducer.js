
const initialState = {
  data: [
  {
    id: 0,
    item: 'Learn Redux',
    completed: false
  }
]   
};

const reducer = (state, action) => {
    switch (action.type) {
    
    case 'Add_Task':
    const newTask = {
        id: Date.now(),
        item: action.payload,
        completed: false  
    }

    return {
    ...state,
    data: [...state.data, newTask]
    }
    break;
    
    case 'Toggle_Task':
    const toggleItem = state.data.map(item => {
      if(item.id === action.payload) {
        return {
          ...item,
          completed: !item.completed
        }
      
      } else {
        return item;
      }
    })
     return {
       ...state,
       data: toggleItem
     }
     break;

     case 'Clear_Items':
     return {
       ...state,
       data: state.data.filter(item => !item.completed)
     }
    
    
    default:
    return state;
    }
};



export { initialState, reducer }
