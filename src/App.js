import {Component, useEffect} from 'react'

import Header from "./components/header/Header";
import NewsPage from "./pages/news/NewsPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Schedule from "./pages/schedule/Schedule";


function App() {

  return (
	  <div className="App">
		<Router>
		  <Header/>
		  <Switch>
			<Route exact path='/'>
			  <NewsPage/>
			</Route>
			<Route path='/login'>
			  <Login/>
			</Route>
			<Route path='/profile'>
			  <Profile/>
			</Route>
			<Route path='/schedule'>
			  <Schedule/>
			</Route>
			<Route path='*'>
			  <div>No page found</div>
			</Route>

		  </Switch>
		</Router>
	  </div>
  );
}

export default App;
