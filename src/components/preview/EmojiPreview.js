import React from 'react'

function EmojiPreview({ emoji }) {
	return (
		<div key={emoji} className='preview-emoji'>
			{emoji ? emoji : '🧐'}
		</div>
	)
}

export default EmojiPreview
