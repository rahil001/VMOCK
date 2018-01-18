import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUsers} from '../actions/index';
import UserList from './userList';

class UserProfile extends Component {

    render() {
        return (
            <h1>
               hello {this.props.match.params.username}
            </h1>
        )
    }
}

export default (UserProfile);