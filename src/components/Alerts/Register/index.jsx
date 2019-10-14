import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core';
import api from '../../../services/api';
import { add } from '../../../store/alerts/actions';

class Register extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      email: '',
      time: '',
      keywords: '',
    };
  }

  addAlert = async (e) => {
    e.preventDefault();
    const { dispatch, auth } = this.props;

    try {
      const { data } = await api.post('/alert/create', this.state, { headers: { Authorization: `Bearer ${auth.token}` } })

      dispatch(add(data));
      this.setState({ email: '', time: '', keywords: '' })
    } catch (error) {
      const { data } = error.response;
      toast.error(data.message);
    }
  };
  
  handleChange = (e, cb) => {
    const { name, value } = e.target

    this.setState({ [name]: value }, typeof cb === 'function' ? cb : null)
  }

  render() {
    const { email, time, keywords } = this.state;

    return (
      <form
        onSubmit={this.addAlert}
      >
        <FormControl
          fullWidth
        >
          <TextField
            name="email"
            label="E-mail"
            type="email"
            onChange={this.handleChange}
            value={email}
          />
        </FormControl>
        <FormControl
          fullWidth
        >
          <InputLabel shrink htmlFor="time"> Intervalo de tempo do e-mail </InputLabel>
          <Select
            name="time"
            label="Intervalo de tempo do e-mail"
            value={time}
            onChange={this.handleChange}
          >
            <MenuItem value="15s"> 15 segundos </MenuItem>
            <MenuItem value="30s"> 30 segundos </MenuItem>
            <MenuItem value="2m"> 2 minutos </MenuItem>
            <MenuItem value="10m"> 10 minutos </MenuItem>
            <MenuItem value="30m"> 30 minutos </MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
        >
          <TextField
            name="keywords"
            label="Keywords"
            value={keywords}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <Button
            type="submit"
          >
            Adicionar
          </Button>
        </FormControl>
      </form>
    );
  }
}

const mapStateToProps = store => store;

export default connect(
  mapStateToProps,
)(Register);
