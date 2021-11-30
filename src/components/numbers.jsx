import React from 'react';
import './numbers.css'


const nums = [1,2,3,4,5,6,7,8,9]

const Numbers = ({input_value_in_selected_cell}) => {
    return (
        <div className='numbers'>
            {nums.map(value => {
                return(<div className='cell' onClick={() => input_value_in_selected_cell(value)
                    
                }> {value} </div>)
            }) }
        </div>
    );
}

export default Numbers;
