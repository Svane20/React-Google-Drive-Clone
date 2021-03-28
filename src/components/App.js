import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../Contexts/AuthContext';
import Signup from './Authentication/Signup';
import Dashboard from './Authentication/Profile';
import Login from './Authentication/Login';
import PrivateRoute from './Authentication/PrivateRoute';
import ForgotPassword from './Authentication/ForgotPassword';
import UpdateProfile from './Authentication/UpdateProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}

          {/* Profile */}
          <PrivateRoute path='/user' component={Dashboard} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />

          {/* Authentication */}
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
