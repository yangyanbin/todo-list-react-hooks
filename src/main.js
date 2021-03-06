import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
// import {HashRouter as Router,Route,Link} from "react-router-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import TodoList from "./page/TodoList";
import About from "./page/About";

import appTitle,{isEmpty as empty,isString} from "./util/util";

ReactDom.render(
	<Router>
		<h1>{empty(appTitle)?appTitle:"empty"}</h1>
		<nav className='nav'>
			<Link className='nav-link' to="/">Todo list</Link>
			<Link className='nav-link' to="/about">About</Link>
		</nav>
		<Route exact path="/" component={TodoList}></Route>
		<Route path="/about" component={About}></Route>
	</Router>,
	document.querySelector('#root')
);
document.title = isString("haha")?"Let's Rock!":"haha";