import React from 'react';
import StopWatch from './components/stopwatch';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />

      <StopWatch />
      <Footer />
    </React.Fragment>
  );
}

export default App;
