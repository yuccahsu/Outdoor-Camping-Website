import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tents from './pages/Tents';
import SingleTent from './pages/SingleTent';
import ErrorPage from './pages/Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tents" component={Tents} />
        <Route exact path="/tents/:slug" component={SingleTent} />
        <Route component={ErrorPage} />  
      </Switch>  
    </div>
  );
}

export default App;
