import './App.css';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/user/:username">
            <UserPage></UserPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
