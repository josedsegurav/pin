import React from 'react';
import Header from './Containers/Header';
import About from './Containers/About';
import Products from './Containers/Products';
import Services from './Containers/Services';
import Contact from './Containers/Contact';


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Products/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
