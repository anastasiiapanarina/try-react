import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.clearSelectedOption}
		contentLabel="Selected Option"
		closeTimeoutMS={400}
		className="modal"
	>
		<h3 className="modal__title" >Selected option</h3>
		<p className="modal__body">{props.selectedOption}</p>
		<button className="button" onClick={props.clearSelectedOption}>OK</button>
	</Modal>
);

export default OptionModal;
