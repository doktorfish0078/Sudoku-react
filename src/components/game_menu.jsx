import './game_menu.css'


function GameModeBtn(props){
    return(
        <div className="game_mode_btn" onClick={() => props.changeGameMode(props.lvl)}>
            {props.text}
        </div>
    );
}

function GameMenu(props){
    return(
        <div className="game_menu">
            <h1 className='title'>Sudoku</h1>
            <GameModeBtn text='Easy' lvl={0} changeGameMode={props.changeGameMode}/>
            <GameModeBtn text='Medium' lvl={1} changeGameMode={props.changeGameMode}/>
            <GameModeBtn text='Hard' lvl={2} changeGameMode={props.changeGameMode}/>
            <GameModeBtn text='Expert' lvl={3} changeGameMode={props.changeGameMode}/>
        </div>
    );
}


export default GameMenu;