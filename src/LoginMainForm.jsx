import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import LoginButton from './LoginButton';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password:'',
        value:''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    let form = event.target.name;
    let state = {};
    state[form] = event.target.value;

    this.setState(state);
}

handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm(this.state);
}

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          id="standard-full-width"
          label="Please Enter Username"
          style={{ margin: 8 }}
          placeholder="Username"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        />
     <TextField
          id="standard-full-width"
          label="Please Enter Password"
          style={{ margin: 8 }}
          placeholder="Password"
          helperText="Please click here to register a new account"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
        />
        <LoginButton/>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);