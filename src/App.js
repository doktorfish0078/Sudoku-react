import './App.css';
import { useState, useEffect } from 'react';
import GameSection from './components/game_section';
import get_unique_sudoku_and_solve from './components/sudoku_generator';

function Game() {
  const [gameMode, changeGameMode] = useState(undefined);
  const [gameArray, setGameArray] = useState([]);
  const [cellSelected, setCellSelected] = useState(-1);
  
  let [initArray, solvedArray] = get_unique_sudoku_and_solve(4);
  // useEffect(() =>{
  //   let [initArray, solvedArray] = get_unique_sudoku_and_solve(3);
  //   setGameArray(initArray);
  // }, []
  // )

  // expert   : 0;
  // hard     : 1;
  // Normal   : 2;
  // easy     : 3;
  // very easy: 4;

  console.log(initArray)
  console.log(solvedArray)

  return (
    <div className="Game" >
      <GameSection gameArray={initArray}/>
      
    </div>
  );
}

export default Game;
