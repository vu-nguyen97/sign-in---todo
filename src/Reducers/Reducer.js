const initialState = {
    todoList: [],
    users: [
        {
            email: '1',
            password: '1'
        },
        {
            email: '2',
            password: '2'
        }
    ],
    isLogin: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            const arr = state.users.filter((user) =>
                (user.email === action.payload.email) && (user.password === action.payload.password))
            return {
                ...state,
                isLogin: ((arr.length === 1) ? true : false)
            }
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'CLEAR_ALL':
            return {
                ...state,
                todoList: []
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                    ((todo.id === action.payload.id) ? ({ ...todo, text: action.payload.textEdit }) : todo)
                )
            }
        default: return state;
    }
}