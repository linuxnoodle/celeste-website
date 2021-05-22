import React from 'react';
import './Main.css';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Jumping from './pages/Jumping';
import Climbing from './pages/Climbing';
import Dashing from './pages/Dashing';
import Supers from './pages/Supers';
import Hypers from './pages/Hypers';
import Ultras from './pages/Ultras';
import Wavedashing from './pages/Wavedashing';
import Wallbouncing from './pages/Wallbouncing'
import Demodashing from './pages/Demodashing'
 
function App() {
    return (
        <Router>
            <NavigationBar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/jumping' component={Jumping} />
                <Route path='/climbing' component={Climbing} />
                <Route path='/dashing' component={Dashing} />
                <Route path='/supers' component={Supers} />
                <Route path='/hypers' component={Hypers} />
                <Route path='/ultras' component={Ultras} />
                <Route path='/wavedashing' component={Wavedashing} />
                <Route path='/wallbouncing' component={Wallbouncing} />
                <Route path='/demodashing' component={Demodashing} />
            </Switch>
            <Footer/>
        </Router>
    );
}
  
export default App;
