import React from 'react';
import './cell.css'


const Cell = (props) => {
    return (
        <div className='cell'>
            {props.text !== '0' ? props.text : '' }
        </div>
    );
}

export default Cell;
