export const initialState = {
    todos: [],
    cantidad: 0,
};

export const actionTypes = {
    add_todo: 'add_todo',
    clear_todo:'clear-todo'
}

export const countRealizadas = (arr)=> {
    let contador = 0;
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i].completed) {
           contador++
        }
    }
    return contador
}


function removeItemFromArr ( arr, item ) {
    /* console.log(arr) */
    for(var i = arr.length - 1; i >= 0; i--) {
        if(arr[i].text === item) {
           arr.splice(i, 1);
        }
    }

    return arr
}

function reducer(state, action) {
    switch (action.type) {
        case "add-todo":
            return {
                todos: [...state.todos, { text: action.text, completed: false }],
                cantidad: state.cantidad + 1
            };
        case "toggle-todo":
            return {
                todos: state.todos.map((t, idx) =>
                    idx === action.idx ? { ...t, completed: !t.completed } : t
                ),
                cantidad: state.cantidad
            };
        case "clear-selec-todo":
            return {
                todos: removeItemFromArr(state.todos,action.text),
                cantidad: state.cantidad - 1

                /* todos: state.todos.map((t, idx) =>
                    idx === action.idx ? {...t, text: null} : t
                ), */
            };
        case "clear-all-todo":
            return{
                todos: [],
                cantidad: 0
            }
        default:
            return state;
    }
}

export default reducer;