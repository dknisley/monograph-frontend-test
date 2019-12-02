import React from 'react'

function EmojiPreview({ emoji }) {
	return <div className='preview-emoji'>{emoji ? emoji : '🧐'}</div>
}

export default EmojiPreview
