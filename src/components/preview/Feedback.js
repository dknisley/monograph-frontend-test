import React from 'react'

function Feedback({ feedback }) {
	return (
		<div
			className={`preview-feedback ${!feedback &&
				'preview-feedback--placeholder'}`}>
			{/* If there is any review text we remove the prompt and display the text */}
			{feedback ? feedback : 'Let us know what we did well or could improve...'}
		</div>
	)
}

export default Feedback
