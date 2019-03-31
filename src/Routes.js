import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Loja from './componentes/Loja';

class Routes extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/loja" exact component={Loja}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;