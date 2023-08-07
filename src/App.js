import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Sign-up';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path= "/">
             <Signup/>
          </Route>
          <Route exact path="/Login">
              <Login/>
          </Route>
          <Route exact path="/Home">
              <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
