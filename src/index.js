import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route,Switch} from 'react-router-dom'
import store from './redux/store';
import Login from './containers/Login'
import Register from './containers/Register'
import Container from './containers/Container'
import { Provider } from "react-redux";

ReactDOM.render(
(
  <div>
    <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={Container} />
      </Switch>
    </HashRouter>
    </Provider>
  </div>
),
  document.getElementById("root")
);
