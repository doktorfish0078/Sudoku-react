import { useState, useEffect } from 'react';
import GameSection from './game_section';
import {Link } from "react-router-dom";

import ModalWindow from './modal_game_result';
import Numbers from './numbers';
import get_unique_sudoku_and_solve from '../solver/sudoku_generator';

import './game.css'

  // expert   : 0;
  // hard     : 1;
  // Normal   : 2;
  // easy     : 3;
  // very easy: 4;

function Game({lvl=Number(new URLSearchParams(window.location.search).get('lvl'))}) {

  const [gameMode, setGameMode] = useState(lvl);

  const [gameArray, setGameArray] = useState([]);
  const [initArray, setInitArray] = useState([]);
  const [solvedArray, setSolvedArray] = useState([]);

  const [selectedCell, setSelectedCell] = useState(-1); 

  const [isWin, setStateWin] = useState(false);

  const [showModalResult, setShowModalResult] = useState(false);
  
  
  useEffect(() =>{
    let [temporaryInitArray, temporarySolvedArray] = get_unique_sudoku_and_solve(gameMode);
    
    setInitArray(temporaryInitArray);
    setSolvedArray(temporarySolvedArray);
    setGameArray(temporaryInitArray);

  }, [])

  useEffect( () => {
    isGameWon();
  }, [gameArray])

  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  function input_value_in_selected_cell(value){
    if(selectedCell === -1 || initArray[selectedCell[0]][selectedCell[1]] !== '0')
        return;
    let copy_game_array = gameArray.slice(0);
    copy_game_array[selectedCell[0]] = setCharAt(copy_game_array[selectedCell[0]], selectedCell[1], value);
    setGameArray(copy_game_array);
    
  }
  
  function isGameWon(){
    for(let index = 0; index < 9; index++) {
      if(gameArray[index] === undefined || gameArray[index] !== solvedArray[index]){
        return false;
      }
    }
    setStateWin(true)
    setShowModalResult(true);    
    return true;
  }

  function onKeyDown(e) {
    if(+e.key > 0)
    input_value_in_selected_cell(e.key)
  }


    return (
      <div className="Game" >
        <div className="title">SUDOKU</div>
        <div className="game_header">
          <Link to='/' className="btn_go_to_menu">В меню</Link>
        </div>
        <div className="game_section">
          <GameSection  
            gameArray={gameArray} 
            initArray={initArray} 
            solvedArray={solvedArray}
            selectedCell={selectedCell} 
            setCellSelected={setSelectedCell}
            onKeyDown = {onKeyDown} 
          />
          <Numbers input_value_in_selected_cell = {input_value_in_selected_cell}/>
          <ModalWindow isVisible={showModalResult} content="You WIN! <3" setShowModalResult={setShowModalResult}/>
        </div>
      </div>
    );
  }


export default Game;
