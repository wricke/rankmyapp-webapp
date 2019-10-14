import React, { Component} from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Box } from '@material-ui/core';

import { login } from '../../store/auth/actions';
import api from '../../services/api';

import { form as formStyle } from './styles';
import { toast } from 'react-toastify';

class Login extends Component {
  constructor(props, ctx) {
    super(props, ctx)

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e, cb) => {
    const { name, value } = e.target

    this.setState({ [name]: value }, cb)
  }

  login = async (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    try {
      const { data } = await api.post('user/auth', this.state)

      dispatch(login(data));
    } catch (error) {
      const { data } = error.response
      toast.error(data.message);
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <form
        onSubmit={this.login}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            width="100%"
            maxWidth="400px"
            minHeight="200px"
          >
            <TextField
              name="email"
              label="E-mail"
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              name="password"
              label="Senha"
              value={password}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
            >
              Entrar
            </Button>
          </Box>
        </Box> 
      </form>
    );}
}

const mapStateToProps = ({ auth: { user, token } }) => ({ user, token });

export default connect(
  mapStateToProps,
)(Login);
