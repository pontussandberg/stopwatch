import React from 'react';
import StopWatch from './components/stopwatch';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Box from './components/some-box';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <React.Fragment>
      <Navbar />


      {/* <div className="container">
        <Box />
      </div> */}


      <StopWatch />
      <Footer />
    </React.Fragment>
  );
}

export default App;
