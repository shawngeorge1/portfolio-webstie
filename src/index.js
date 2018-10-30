import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './components/Contact'
import Projects from './components/Projects'
 




ReactDOM.render(
<Router> 
    <div>
        <Route path = "/" component ={App} />
        <Route path = "/Projects" component = {Projects} />
        <Route path = "/Contact" component = {Contact}/>
    </div>
</Router>
,
document.getElementById('root'));

