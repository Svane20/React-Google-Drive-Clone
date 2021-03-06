import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../Contexts/AuthContext';
import Signup from './Authentication/Signup';
import Profile from './Authentication/Profile';
import Login from './Authentication/Login';
import PrivateRoute from './Authentication/PrivateRoute';
import ForgotPassword from './Authentication/ForgotPassword';
import UpdateProfile from './Authentication/UpdateProfile';

import Dashboard from '../components/google-drive/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/folder/:folderId' component={Dashboard} />

          {/* Profile */}
          <PrivateRoute path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />

          {/* Auth */}
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
