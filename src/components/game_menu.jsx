import { Link } from 'react-router-dom';
import './game_menu.css'


function GameModeBtn({setGameMode, text, lvl}){
    return(
        <Link to={`/game?lvl=${lvl}`} className="game_mode_btn">
            {text}
        </Link>
    );
}

function GameMenu({setGameMode}){
    return(
        <div className="game_menu">
            <h1 className='title'>Sudoku</h1>
            <GameModeBtn text='Easy' lvl={4}/>
            <GameModeBtn text='Medium' lvl={3}/>
            <GameModeBtn text='Hard' lvl={2}/>
            <GameModeBtn text='Expert' lvl={1}/>
        </div>
    );
}


export default GameMenu;