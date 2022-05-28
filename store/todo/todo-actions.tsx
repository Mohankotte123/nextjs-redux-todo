import { Dispatch } from '../store'
import * as types from '../types'

function dummyTimeOut(seconds: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds)
    })
}
export type todo = { todo: string, isCompleted: boolean, id: number };
export const Update = (todos: todo[]) => async (dispatch: Dispatch) => {
    dispatch({
        type: types.UPDATE,
        loading: true,
        error: null,
        success: false
    })

    try {
        await dummyTimeOut(300);
        localStorage.setItem('todos', JSON.stringify(todos))
        dispatch({
            type: types.UPDATE,
            todos: todos,
            error: null,
            loading: false,
            success: true
        })
    } catch(error) {
        dispatch({
            type: types.UPDATE,
            error: "Something went wrong!",
            loading: false,
            success: false
        })
    }
}

export const Get = () => async (dispatch: Dispatch) => {
    dispatch({
        type: types.GET,
        loading: true,
        error: null,
        success: false
    })

    try {
        await dummyTimeOut(300);
        const todos = localStorage.getItem('todos');
        dispatch({
            type: types.GET,
            todos: todos ? JSON.parse(todos) : [],
            error: null,
            loading: false,
            success: true
        })
    } catch(error) {
        dispatch({
            type: types.GET,
            error: "Something went wrong!",
            loading: false,
            success: false
        })
    }
}