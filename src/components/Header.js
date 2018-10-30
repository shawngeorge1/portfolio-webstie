import React, {Component} from 'react';
import '../App.css'

export default class Header extends Component{
    render(){
        return(
            <div className = "Header">
              <nav className ="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Shawn George</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                      <a className="nav-link" href="./About">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./Contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
        );
    }
}
