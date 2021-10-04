import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
