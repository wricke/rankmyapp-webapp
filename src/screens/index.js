import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login'

class Screen extends Component {
  render() {
    const { token } = this.props;

    return (
      <div>
        {
          token ? <div>aa</div> : <Login />        
        }
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ token: auth.token });

export default connect(
  mapStateToProps,
)(Screen);
