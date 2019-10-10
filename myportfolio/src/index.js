import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './component/HeaderComponent';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import './assets/App.css';


class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <HeaderComponent />
                </BrowserRouter>
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
