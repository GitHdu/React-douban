import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import MovieList from '../containers/movieList'
import Movie from '../containers/movie'
import Book from '../containers/book'
import About from '../components/About'
import Search from '../containers/search'

export default (
    <Route path='/' component={App} >
        <IndexRoute component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/book/:id" component={Book} />
        <Route path="/about" component={About}/>
        <Route path="/search" component={Search}/>
    </Route>
)