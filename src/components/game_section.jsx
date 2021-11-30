import React from 'react';
import './game_section.css'

const GameSection = ({gameArray, initArray, solvedArray, selectedCell, setCellSelected, onKeyDown}) => {

    const rows = [0,1,2,3,4,5,6,7,8];
    
    const init_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell init_cell`} 
            onClick={() => setCellSelected([index_row, index_col])}>
            {value !== '0' ? value : '' }
        </div>
        )
    }

    const selected_user_cell = (index_row, index_col, value, isCorrect) => {
        return (
        <div className={`cell secelted_cell ${isCorrect ? '' : 'uncorrect_cell'}`} 
            onClick={() => setCellSelected([index_row, index_col])}
            onKeyPress={onKeyDown}
            tabIndex = {1}
            >
                
            {value !== '0' ? value : '' }
        </div>
        )
    }
    const selected_init_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell init_cell secelted_cell`} 
            onClick={() => setCellSelected([index_row, index_col])}>
            {value !== '0' ? value : '' }
        </div>
        )
    }
    const any_selected_user_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell any_selected`} 
            onClick={() => setCellSelected([index_row, index_col])}>
            {value !== '0' ? value : '' }
        </div>
        )
    }

    const any_selected_init_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell init_cell any_selected`} 
            onClick={() => setCellSelected([index_row, index_col])}>
            {value !== '0' ? value : '' }
        </div>
        )
    }

    const user_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell`} 
            onClick={() => setCellSelected([index_row, index_col])}
            >
            {value !== '0' ? value : '' }
        </div>
        )
    }

    const uncorrect_user_cell = (index_row, index_col, value) => {
        return (
        <div className={`cell uncorrect_cell`} 
            onClick={() => setCellSelected([index_row, index_col])}
            >
            {value !== '0' ? value : '' }
        </div>
        )
    }
    


    return (
        <div className="table">
            {
                gameArray.map((row_items, index_row) => {
                    return (
                        <div className={`table_row ${(index_row===2 || index_row===5) && 'border_bottom'}`}>
                        {
                            rows.map((index_col) => {
                                const value = gameArray[index_row][index_col];

                                if(value !== '0' && gameArray[index_row][index_col] === initArray[index_row][index_col]) // if init_cell
                                    if(selectedCell !== -1 &&  selectedCell[0] === index_row && selectedCell[1] === index_col) // if selected
                                        return selected_init_cell(index_row, index_col, value)
                                    else 
                                        return init_cell(index_row, index_col, value)
                                else // user cell

                                if(selectedCell !== -1 &&  selectedCell[0] === index_row && selectedCell[1] === index_col)
                                    if (value !== '0' && (gameArray[index_row][index_col] !== solvedArray[index_row][index_col]))
                                        return selected_user_cell(index_row, index_col, value, false)
                                    else return selected_user_cell(index_row, index_col, value, true)
                                else
                                if (value !== '0' && (gameArray[index_row][index_col] !== solvedArray[index_row][index_col]))
                                    return uncorrect_user_cell(index_row, index_col, value)
                                return user_cell(index_row, index_col, value)
                            })
                        }
                        </div>
                        )
                }
                )
            }
        </div>
    );
}


export default GameSection;
  