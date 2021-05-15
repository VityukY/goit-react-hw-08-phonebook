import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//import * as operations from './redux/contacts/contact-operations';
//import { connect } from 'react-redux';
import './Components/styles.css';
import routes from './routs';
import AppBar from './Components/AppBar';

const Home = lazy(() =>
   import('./pages/Home' /* webpackChunkName: "home-page" */),
);
const Contacts = lazy(() =>
   import('./pages/Contacts' /* webpackChunkName: "contacts-page" */),
);
const Registarion = lazy(() =>
   import('./pages/Registarion' /* webpackChunkName: "registration-page" */),
);
const Login = lazy(() =>
   import('./pages/Login' /* webpackChunkName: "login-page" */),
);

class App extends Component {
   state = {};
   render() {
      return (
         <>
            <AppBar />
            <Suspense fallback={<h1>грузимся...</h1>}>
               <Switch>
                  <Route path={routes.contacts} component={Contacts} />
                  <Route path={routes.home} component={Home} />
                  <Route path={routes.registarion} component={Registarion} />
                  <Route path={routes.login} component={Login} />
               </Switch>
            </Suspense>
         </>
      );
   }
}

export default App;
