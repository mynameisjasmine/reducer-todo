
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
    
    // case 'Toggle_Task':
    //  return {
    //    ...state,

    //  }
    
    
    default:
    return state;
    }
};



export { initialState, reducer }
