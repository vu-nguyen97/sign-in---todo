import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Success from './Components/Success'
import NoMatchPage from './Components/404'
import FormAdd from './Components/TodoComponents/FormAdd'

import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    const { isLogin } = this.props
    return (
      <BrowserRouter>
        <div>
          <ul>
            {
              (isLogin) &&
              <li><Link to="/">Home</Link></li>
            }
            <li><Link to="/login" >Login</Link></li>
            {
              (isLogin) &&
              <li><Link to="/todo">TODO</Link></li>
            }
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todo" component={FormAdd} />
            <Route exact path="/success" component={Success} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = state => ({
  isLogin: state.isLogin
})
export default connect(mapStateToProps)(App)