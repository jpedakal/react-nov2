import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                <Route path="/" component={Home} exact></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;