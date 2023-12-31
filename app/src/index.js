import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import becomeHost from './pages/becomeHost';
import Signup from './pages/Signup'
import Home from './pages/Home'
import SuccessfulPosting from './pages/SuccessfulPosting'
import CreateProfile from './pages/CreateProfile'
import SingleProperty from './pages/SinglePropertyPage'
import SuccessfulBooking from './pages/SuccessfulBooking'
import MyBookings from './pages/MyBookings';
import MyHomeBookings from './pages/MyHomeBookings';
import Rentings from './pages/Rentings';
import FamilyApartments from './pages/FamilyApartments';
import VacationVillas from './pages/VacationVillas';
import ScrollToTop from './Components/ScrollToTop';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

const routing = (
  <Web3ReactProvider getLibrary={getLibrary}>
  <Router>
  <ScrollToTop/>
    <Route exact path="/" component={App}/>
    <Route exact path="/become-host" component={becomeHost}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/done-posting-home" component={SuccessfulPosting}/>
    <Route exact path="/create-profile" component={CreateProfile}/>
    <Route exact path="/property" component={SingleProperty}/>
    <Route exact path="/done-booking" component={SuccessfulBooking}/>
    <Route exact path="/my-bookings" component={MyBookings}/>
    <Route exact path="/my-home-bookings" component={MyHomeBookings}/>
    <Route exact path="/rentings" component={Rentings}/>
    <Route exact path="/family-apartments" component={FamilyApartments}/>
    <Route exact path="/vacation-villas" component={VacationVillas}/>
  </Router>
  </Web3ReactProvider>
)

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
