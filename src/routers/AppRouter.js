import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginPage from '../components/LoginPage'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter