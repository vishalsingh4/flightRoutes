import React from 'react';

// components import
import FlightDetails from 'components/FlightDetails';
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';

function App() {
  return (
    <div className="app">
      <header className='header-section'>
        <HeaderComponent />
      </header>
      <main className='main-section'>
        <FlightDetails />
      </main>
      <footer className='footer-section'>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
