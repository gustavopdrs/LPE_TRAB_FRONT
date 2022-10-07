import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import React from 'react';
import Elencos from './componentes/telas/elencos/Elencos';
import Jogadores from './componentes/telas/jogadores/Jogadores'
function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/elencos" element={<Elencos/>}/>
          <Route exact path="/jogadores" element={<Jogadores/>}/>
        </Routes>
    </Router>
  );
}

export default App;