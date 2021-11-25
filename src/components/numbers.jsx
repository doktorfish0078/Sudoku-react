import React from 'react';
import './numbers.css'
const nums = [1,2,3,4,5,6,7,8,9]

const Numbers = () => {
    return (
        <div className='numbers'>
            {nums.map(num => {
                return(<div className='cell'> {num} </div>)
            }) }
        </div>
    );
}

export default Numbers;
