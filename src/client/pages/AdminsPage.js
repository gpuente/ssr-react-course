import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from '../components/hocs/requireAuth';
import { fetchAdmins } from '../actions';

class AdminsPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => (
      <li key={admin.id}>{ admin.name }</li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{ this.renderAdmins() }</ul>
      </div>
    );
  }
}


function mapStateToProps({ admins }) {
  return { admins };
}


export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
