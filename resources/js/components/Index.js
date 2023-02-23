import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './admin-theme/authentication/Login';
import Register from './admin-theme/Register';

function Index()  {
    return (
        <>   
            <BrowserRouter>
            <Switch>
            <Route exact path="/" >
                    <Login />
            </Route> 
            <Route exact path="/register" >
                    <Register />
            </Route> 
            </Switch> 

               
           
            </BrowserRouter>          
        </>
    );
}

export default Index ;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

