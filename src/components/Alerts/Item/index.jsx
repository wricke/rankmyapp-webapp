import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core';
import { Mail, Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { remove } from '../../../store/alerts/actions';

class Alert extends Component {
  removeAlert = async (_id) => {
    const { dispatch, auth } = this.props

    try {
      await api.delete(`alert/${_id}`, { headers: { Authorization: `Bearer ${auth.token}` }});

      dispatch(remove(_id))
    } catch (error) {
      const { data } = error.response;
      toast.error(data.message);
    }
  }

  render() {
    const { _id, email, time, keywords } = this.props.alert;

    return (
      <ListItem>
        <ListItemIcon>
          <div>
            <Mail />
          </div>
        </ListItemIcon>
        <ListItemText
          primary={email}
          secondary={`${time} ${keywords}`}
        />
        <IconButton onClick={() => this.removeAlert(_id)}>
          <Delete />
        </IconButton>
      </ListItem>
    )
  }
};

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
)(Alert);

