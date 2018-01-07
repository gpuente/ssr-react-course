import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => (
      <li key={user.id}>{ user.name }</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`${ this.props.users.length } Users App`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <ul>
        { this.head() }
        Users
        { this.renderUsers() }
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users };
}


function loadData(store) {
  return store.dispatch(fetchUsers());
}


export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData,
}
