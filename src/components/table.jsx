import React from 'react';
import './table.css'
import Cell from './cell';

const Table = (props) => {
    const rows = [0,1,2,3,4,5,6,7,8]
  
    return (
        <div className="table">
            {/* {
                
                rows.map((row) => {
                    console.log(props.gameArray[row])
                    return (
                        <TableRow cells={props.gameArray[row]}/>
                        
                        )
                }
                )
            } */}
            <TableRow cells={props.gameArray[0]}/>
            <TableRow cells={props.gameArray[1]}/>
            <TableRow cells={props.gameArray[2]} border_buttom={true}/>
            <TableRow cells={props.gameArray[3]}/>
            <TableRow cells={props.gameArray[4]}/>
            <TableRow cells={props.gameArray[5]} border_buttom={true}/>
            <TableRow cells={props.gameArray[6]}/>
            <TableRow cells={props.gameArray[7]}/>
            <TableRow cells={props.gameArray[8]}/>
        </div>
    );
}

const TableRow = (props) => {
    let arr_comps = [];
    for (let i = 0; i < 9; i++){
        arr_comps[i] = <Cell text={props.cells[i]}/>
    }

    return (
        <div className={props.border_buttom ? "table_row border_bottom" : "table_row"}>
            {arr_comps}
        </div>
    );
}

export default Table;
