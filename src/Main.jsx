import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormDialog from './FormDialog';
import RegisterForm from './RegisterForm';
import Sale from './Sale';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={ Sale }></Route>
        <Route exact path='/create' component={ FormDialog }></Route>
        <Route exact path='/register' component={ RegisterForm }></Route>
        </Switch>
      </div>
    )
  }
}
