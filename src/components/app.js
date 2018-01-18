import React, { Component } from 'react';
import SearchBar from  '../containers/searchBar';
import UserProfile from '../containers/userProfile';
import { Switch, Route } from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={SearchBar}/>
            <Route name="profile" path='/users/:username' component={UserProfile}/>
        </Switch>
    );
  }
}
