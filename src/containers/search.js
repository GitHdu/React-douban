import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchView from '../components/Search'
import * as actionCreators from '../actions/search'
import * as selector from '../reducers/search'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        loading: state.commonReducer.loading,
    }
}

const mapDispacth2Props = dispatch => {
    const actions = bindActionCreators(actionCreators, dispatch)
    return {
        searchMovie: actions.searchMovie,
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(SearchView)
