import React from 'react';
import './global.css';

import Header from'./pages/Header'
import Conteudo from'./pages/Conteudo'
import Footer from'./pages/Footer'

function App() {
  return (
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
