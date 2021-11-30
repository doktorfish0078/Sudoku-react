import React from 'react';
import './App.css';

import Game from './components/game';
import GameMenu from './components/game_menu';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<GameMenu/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
