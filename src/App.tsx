import React from 'react';
import './app.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecordsIcon from '@material-ui/icons/AssignmentInd';
import AppointmentsIcon from '@material-ui/icons/LocalHospital';
import {Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="container">
      <div className="glass">
        <nav>
          <ul>
            <li><Link to="/dashboard" className="linkBtn"><DashboardIcon /></Link></li>
            <li><Link to="/appointments" className="linkBtn"><AppointmentsIcon /></Link></li>
            <li><Link to="/records" className="linkBtn"><RecordsIcon /></Link></li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
