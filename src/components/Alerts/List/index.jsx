import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';

import AlertItem from '../Item'

class AlertList extends Component {
  render() {
    const { alerts } = this.props;

    return (
      <div>
        {
          alerts && Array.isArray(alerts) && alerts.length
            ?
              <List>
                {
                  alerts.map(alert =>
                    <AlertItem
                      key={alert._id}
                      alert={alert}
                    />
                  )
                }
              </List>
            :
              <div> Nenhum alerta programado. </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
)(AlertList);

