import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Alerts from './Alerts';
import { Button, Box } from '@material-ui/core';
import { logout } from '../store/auth/actions';

class Screen extends Component {
  render() {
    const { token, dispatch } = this.props;

    return (
      <div>
        {
          token
            ? (
              <div>
                <Alerts />
                <Box
                  position="absolute"
                  right="30px"
                  bottom="30px"
                >
                  <Button
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Button>
                </Box>
              </div>
            )
            : <Login />        
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ token: auth.token });

export default connect(
  mapStateToProps,
)(Screen);
