import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Sign-up';
import Home from './Home';
import Login from './Login';
import Budgetanalytics from './Budget-analytics';
import { useEffect, useState } from 'react';

function App() {
  
  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
const initialBudgetList = [
    {
        id: 1,
        name: "Grocery",
        price: 1300,
        date: "2023-01-15 14:30:45",
    },
    {
        id: 2,
        name: "Electronics",
        price: 500,
        date: "2023-01-20 09:15:20",
    },
    {
        id: 3,
        name: "Dining out",
        price: 250,
        date: "2023-01-25 18:45:10",
    },
    {
        id: 4,
        name: "Entertainment",
        price: 800,
        date: "2023-02-08 21:20:05",
    },
    {
        id: 5,
        name: "Clothing",
        price: 150,
        date: "2023-02-15 12:10:30",
    },
    {
        id: 6,
        name: "Gas",
        price: 40,
        date: "2023-03-02 08:00:15",
    },
    {
        id: 7,
        name: "Home Improvement",
        price: 750,
        date: "2023-03-10 16:55:40",
    },
    {
        id: 8,
        name: "Healthcare",
        price: 300,
        date: "2023-03-18 10:40:25",
    },
    {
        id: 9,
        name: "Travel",
        price: 1200,
        date: "2023-04-05 13:05:55",
    },
    {
        id: 10,
        name: "Gym Membership",
        price: 80,
        date: "2023-04-10 07:25:50",
    },
    {
        id: 11,
        name: "Grocery",
        price: 900,
        date: "2023-04-20 14:30:45",
    },
    {
        id: 12,
        name: "Electronics",
        price: 600,
        date: "2023-05-03 09:15:20",
    },
    {
        id: 13,
        name: "Dining out",
        price: 250,
        date: "2023-05-12 18:45:10",
    },
    {
        id: 14,
        name: "Entertainment",
        price: 800,
        date: "2023-06-01 21:20:05",
    },
    {
        id: 15,
        name: "Clothing",
        price: 150,
        date: "2023-06-20 12:10:30",
    },
    {
        id: 16,
        name: "Gas",
        price: 40,
        date: "2023-07-08 08:00:15",
    },
    {
        id: 17,
        name: "Home Improvement",
        price: 750,
        date: "2023-07-15 16:55:40",
    },
    {
        id: 18,
        name: "Healthcare",
        price: 300,
        date: "2023-07-25 10:40:25",
    },
    {
        id: 19,
        name: "Travel",
        price: 1200,
        date: "2023-08-07 13:05:55",
    },
    {
        id: 20,
        name: "Gym Membership",
        price: 80,
        date: "2023-08-12 07:25:50",
    },
    {
        id: 21,
        name: "Grocery",
        price: 900,
        date: "2023-08-20 14:30:45",
    },
    {
        id: 22,
        name: "Electronics",
        price: 600,
        date: "2023-09-05 09:15:20",
    },
    {
        id: 23,
        name: "Dining out",
        price: 250,
        date: "2023-09-18 18:45:10",
    },
    {
        id: 24,
        name: "Entertainment",
        price: 800,
        date: "2023-10-02 21:20:05",
    },
    {
        id: 25,
        name: "Clothing",
        price: 150,
        date: "2023-10-15 12:10:30",
    },
    {
        id: 26,
        name: "Gas",
        price: 40,
        date: "2023-10-25 08:00:15",
    },
    {
        id: 27,
        name: "Home Improvement",
        price: 750,
        date: "2023-11-10 16:55:40",
    },
    {
        id: 28,
        name: "Healthcare",
        price: 300,
        date: "2023-11-20 10:40:25",
    },
    {
        id: 29,
        name: "Travel",
        price: 1200,
        date: "2023-11-28 13:05:55",
    },
    {
        id: 30,
        name: "Gym Membership",
        price: 80,
        date: "2023-12-05 07:25:50",
    },
    {
        id: 31,
        name: "Grocery",
        price: 900,
        date: "2023-12-15 14:30:45",
    },
    {
        id: 32,
        name: "Electronics",
        price: 600,
        date: "2023-12-28 09:15:20",
    },
    {
        id: 33,
        name: "Dining out",
        price: 250,
        date: "2024-01-05 18:45:10",
    },
    {
        id: 34,
        name: "Entertainment",
        price: 800,
        date: "2024-01-15 21:20:05",
    },
    {
        id: 35,
        name: "Clothing",
        price: 150,
        date: "2024-02-02 12:10:30",
    },
    {
        id: 36,
        name: "Gas",
        price: 40,
        date: "2024-02-18 08:00:15",
    },
    {
        id: 37,
        name: "Home Improvement",
        price: 750,
        date: "2024-03-03 16:55:40",
    },
    {
        id: 38,
        name: "Healthcare",
        price: 300,
        date: "2024-03-18 10:40:25",
    },
    {
        id: 39,
        name: "Travel",
        price: 1200,
        date: "2024-04-05 13:05:55",
    },
    {
        id: 40,
        name: "Gym Membership",
        price: 80,
        date: "2024-04-15 07:25:50",
    },
];
    setBudgetList(initialBudgetList);
  }, []); // Run this effect only once on component mount

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
              <Home budgetList={budgetList} setBudgetList={setBudgetList}/>
          </Route>
          <Route  path="/Profile">
              <Login/>
          </Route>
          <Route  path="/Budget-analytics">
            <Budgetanalytics data={budgetList}/>
          </Route>
          <Route  path="/Logout">
          <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
