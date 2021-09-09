import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './page/home/home'
import Detail from './page/detail/detail'
import './App.css'
import Nav from './componnet/navigation/nav'
export default function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path='/detail'>
                        <Detail />
                    </Route>
                </Switch>

            </Router>

        </div>
    )
}
