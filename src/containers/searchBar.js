import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUsers} from '../actions/index';
import UserList from './userList';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    };



    render() {
        return (
            <div>
                <h3 className="heading">FETCH GITHUB USERS</h3>
                <form onSubmit={this.props.onFormSubmit} className="input-group">
                    <input placeholder="Fetch Github Users" className="form-control" value={this.state.term}
                           onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
                </form>
                {(this.props.users && this.props.users.length > 0) && <UserList list={this.props.users[0]}/>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {

    return {
        users: state.users
    }

};

const mapDispatchToProps = function (dispatch) {

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(fetchUsers(e.target.childNodes[0].value));
    }
    return {
        onFormSubmit
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);