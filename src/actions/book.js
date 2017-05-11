import fetch from 'isomorphic-fetch'
import {createAction } from 'redux-actions'
import { FETCH_BOOK } from '../constants/actionTypes'
import * as API from '../constants/API'
import { loadingStatus } from './common'

const fetchSuccess = createAction(FETCH_BOOK.SUCCESS)
//const fetchSuccess = createAction(FETCH_BOOK.SUCCESS,data=>data)
/*const fetchSuccess = (data='default data') => {
    return {
        type: FETCH_BOOK.SUCCESS,
        payload: function(data){
            return data
        }   //redux-thunk就是使dispatch可以接受函数作为参数的中间件
    }
}*/


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