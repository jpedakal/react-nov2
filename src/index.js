import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Post from './component/Post';
import Profile from './component/Profile';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Home}></Route>
      <Route path="/post" component={Post}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));