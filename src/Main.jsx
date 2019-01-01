import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormDialog from './FormDialog';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/create' component={ FormDialog }></Route>
        </Switch>
      </div>
    )
  }
}
