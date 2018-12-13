import React from 'react'
import {Router, Route, browserHistory } from 'react-router'

import Main from '../Containers/main.jsx'
import Welc from '../Containers/welcome-cont.jsx'
import About from '../Containers/about.jsx'

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={Welc}></Route>
        <Route path='/main' component={Main}></Route>
        <Route path='/about' component={About}></Route>
    </Router>
)    