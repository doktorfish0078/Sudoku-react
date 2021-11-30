import './modal_game_result.css';
import {useEffect } from 'react';

const ModalWindow = ({isVisible, content, setShowModalResult}) =>{
    if (!isVisible) return null
    
    return(
        <div className="modal">
            <div className="modal_result">
                <div className="modal_header">
                    <div className="modal_close" onClick={() => setShowModalResult(false)}>X</div>
                </div>
                <div className="modal_body">
                    {content}
                </div>
            </div>
        </div>
        
    )
}

export default ModalWindow