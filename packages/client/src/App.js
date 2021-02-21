import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import Registration from './pages/registration';
import Login from './pages/login';
import Users from './pages/users';
import Home from './pages/home';
import { connect } from 'react-redux';

function App() {
  const activeStyle = { fontWeight: 'bold', color: 'red' };
  const isLogin = 1;
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeStyle={activeStyle}>
              Users list
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" activeStyle={activeStyle}>
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeStyle={activeStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          {isLogin ? <Users /> : <p>Please, login to see all users!</p>}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);
