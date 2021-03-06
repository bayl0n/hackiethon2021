// import './App.css';
// import Navigation from './Navigation';
// import Body from './Body';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp.js';
import Login from './pages/Login/Login.js';
import WebsitePreferences from './pages/Preferences/Preferences.jsx';
import Pomodoro from './pages/Pomodoro/Pomodoro';

import Error from './pages/Error'

function App() {
  return (
    <main>
      <Switch>
        <Route path={['/', "/home"]} component={Home} exact />
        <Route path={['/pomodoro', '/break']} component={Pomodoro} exact />
        <Route path='/login' component={Login} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/preferences' component={WebsitePreferences} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
