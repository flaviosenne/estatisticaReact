import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './pages/Nav'
import Descritiva from './pages/Descritiva'
import Probabilidade from './pages/Probabilidade'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component = {Nav} />
                <Route path ="/descritive" component = {Descritiva} />
                <Route path ="/probabilidade" component = {Probabilidade} />
            </Switch>
        </BrowserRouter>
    )
}