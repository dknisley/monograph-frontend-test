import React from 'react'

function Party({ party, location }) {
	// Update the text if singular diner vs plural
	const generatePartyText = () => {
		if (party === '1') return 'person '
		return 'people '
	}
	const partyType = generatePartyText()

	// Empty state
	if (!party) {
		return (
			<div className='preview-party preview-party--placeholder'>
				Enter your party size
			</div>
		)
	}

	return (
		<div className='preview-party'>
			<span className='preview-party__size'>{party}</span> {partyType}
			{/* Include the location if it exists in state */}
			dined {location ? `at ${location}` : 'here'}
		</div>
	)
}

export default Party
