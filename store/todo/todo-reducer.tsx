import * as types from '../types'

export type todo = { todo: string, isCompleted: boolean, id: number };                                                      
interface todoAction {
    type: string,
    todos?: todo[],
   
}

export interface todoState {
    todos: null | todo[],
}

const initialState: todoState = {
    todos: null,
}

export const todoReducer = (state = initialState, action: todoAction) => {
    switch (action.type) {
        case types.UPDATE:
            return {
                ...state,
                todos: action.todos? action.todos : state.todos,

            }
        case types.GET: 
            return {
                ...state,
                todos: action.todos? action.todos : state.todos,
              
            }
        default:
            return state
    }
}