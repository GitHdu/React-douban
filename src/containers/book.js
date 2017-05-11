import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import bookView from '../components/book/bookView'
import * as actionCreators from '../actions/book'
import * as selector from '../reducers/book'

const mapState2Props = (state) => {
    return {
        data: selector.getState(state).fetchData,
        loading: state.commonReducer.loading,
    }
}

const mapDispatch2Props = (dispatch) => {
    const actions = bindActionCreators(actionCreators, dispatch)
    return {
        fetchData: actions.fetchData
    }
}

export default connect(
    mapState2Props,
    mapDispatch2Props
)(bookView)