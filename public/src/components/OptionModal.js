import React from 'react';
import Modal from 'react-modal';

const OptionModal= (props)=>{
    return(
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handlePickClear}
        className="modal"
        >
        <h3 className='modalTitle'>Here is what you should do:</h3>
        <p className='modalBody'>{!!props.selectedOption && props.selectedOption}</p>
        <button onClick={props.handlePickClear}>Close</button>
    </Modal>
    )
};

export default OptionModal;