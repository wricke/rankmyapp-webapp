import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'

import AlertList from '../../components/Alerts/List'
import api from '../../services/api';
import { save } from '../../store/alerts/actions';
import Register from '../../components/Alerts/Register';

class Alerts extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      open: false,
    };

    this.loadAlerts();
  }
  
  loadAlerts = async () => {
    const { dispatch, auth } = this.props;

    try {
      const { data } = await api.get('/alert/', { headers: {
        Authorization: `Bearer ${auth.token}`
      } });

      dispatch(save(data));
    } catch (error) {
      const { data } = error.response
      toast.error(data.message);
    }
  }

  render() {
    return (
      <div>
        <AlertList />
        <Register />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
)(Alerts);

