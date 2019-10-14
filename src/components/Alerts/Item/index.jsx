import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Mail } from '@material-ui/icons';

const Alert = ({ alert }) => {
  const { email, time, keywords } = alert;

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
    </ListItem>
  )
};

export default Alert;
