import fetch from 'isomorphic-fetch'
import {createAction } from 'redux-actions'
import { FETCH_BOOK } from '../constants/actionTypes'
import * as API from '../constants/API'
import { loadingStatus } from './common'

const fetchSuccess = createAction(FETCH_BOOK.SUCCESS)
//const fetchSuccess = createAction(FETCH_BOOK.SUCCESS,data=>data)
/* fetchSuccess(data)相当于是一个ActionCreator，返回
    {
        type: FETCH_BOOK.SUCCESS,
        payload: data
    }
}*/

// ActionCreator redux-thunk就是使dispatch可以接受函数作为参数的中间件，而这里的dispatch已经mapDispatch2Props
export const fetchData = (id) => (dispatch) => {
    dispatch(loadingStatus(true));
    return fetch(`${API.FETCH_BOOK_BY_ID}/${id}`)
    .then((response) => {
        dispatch(loadingStatus(false))
        return response
    })
    .then((response) => response.json())
    .then((data) => {
        dispatch(fetchSuccess(data))
    })
    .catch()
}