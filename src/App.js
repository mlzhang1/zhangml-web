/*
 * @Description: 路由控制
 * @Author: mlzhang1
 * @Date: 2020-09-14 20:58:04
 * @LastEditTime: 2020-12-05 13:33:20
 * @LastEditors: mlzhang1
 * @email: 1163257974@qq.com
 */
import React from 'react';
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './page/login';
import Test from './page/test';

const App = ({ history }) => (
  <HashRouter>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/test' component={Test} />
      </Switch>
    </Router>
  </HashRouter>
);
App.propTypes = {
  history: PropTypes.shape({}).isRequired
};
export default App;