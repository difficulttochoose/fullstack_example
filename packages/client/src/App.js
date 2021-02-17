import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import CreateUserForm from './components/createUserForm';
import UsersList from './components/usersList';
import Home from './pages/home';
import { connect } from 'react-redux';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createuser"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Create new user
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Users list
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/createuser">
          <CreateUserForm />
        </Route>
        <Route path="/users">
          <UsersList />
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
