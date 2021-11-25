import React from 'react';
import Table from './table';
import Numbers from './numbers';
import './game_section.css'

const GameSection = (props) => {
    
    return (
        <div className='game_section'>
            <Table gameArray={props.gameArray}/>
            <Numbers/>
        </div>
    );
}

export default GameSection;
  