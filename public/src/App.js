import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Home />
        <Navbar />
        <Wrapper />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
      </Wrapper>
      <Footer />
    </div>
    </Router >
  );
}

export default App;
