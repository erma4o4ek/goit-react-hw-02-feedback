import React from 'react';
import PropType from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button key={option} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
Feedback.PropType = {
	options: PropType.array.isRequired,
	onLeaveFeedback: PropType.func.isRequired
};

export default Feedback;