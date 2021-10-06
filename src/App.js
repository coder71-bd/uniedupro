import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoreServices from './components/MoreServices/MoreServices';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {/* services page */}
          <Route exact path="/services">
            <MoreServices />
          </Route>

          {/* about page */}
          <Route exact path="/about">
            <About />
          </Route>

          {/* contact page */}
          <Route exact path="/contact">
            <Contact />
          </Route>

          {/* home page */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* not found page */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
