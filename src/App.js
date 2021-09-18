import React from 'react';
import Header from './components/Header/Header';
import "./App.css";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Signup from './components/Signup/Signup';
import Forgot from './components/Forgot/Forgot';
import SetPass from './components/SetPass/SetPass';
import Feeds from './components/Feeds/Feeds';
import Postjobs from './components/Postjob/Postjob';
import { connect } from 'react-redux';

function App({ user }) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/forgot" exact component={Forgot} ></Route>
          <Route path="/setpass" exact component={SetPass}></Route>
          {user ? (
            <>
              <Route path="/feeds" exact component={Feeds}></Route>
              <Route path="/postjobs" exact component={Postjobs}></Route>
            </>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Switch>

      </Router>
    </div>
  );
}

const mapStatetoProps = (Store) => {
  return {
    user: Store.user,
  }
}

export default connect(mapStatetoProps,)(App);
