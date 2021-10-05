import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

/* 
  1. minimum 4 route.
  2. footer and header will always remain
  3. homepage a ekta part thakbe.
  4. minimum 4 service should be shown.
  5. site er ekta reasonable name dite hobe.
  6. services er jonno fake data nije theke toiri kore nite hobe.
  7. services page e 7-8 ta service dite hobe.
  8. bonus:
    a. readme edit.
    b. 
*/
