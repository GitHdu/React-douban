import { combineReducers } from 'redux'
import { FETCH_BOOK } from '../constants/actionTypes'

export const fetchData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BOOK.SUCCESS: {
            return action.payload;
            //actions具备 type 、payload、error 和 meta 中的一个或者多个属性。type 字段不可缺省，其它字段可缺省
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    fetchData
    //es6特性：相当于fetchData:fetchData
})

// selector 用于获取当前当前 state
export const getState = (state) => {
    return state.bookReducer;
}