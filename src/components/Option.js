import React from 'react';

const Option = (props) => (
	<li>
		{props.option}
		<button onClick={(e) => {
			props.handleDeleteOption(props.option)
		}}>
			Remove
		</button>
	</li>
);

export default Option;