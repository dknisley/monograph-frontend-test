import React from 'react'
import Emoji from './Emoji'
import EmojiPicker from './EmojiPicker'
import './Emojis.css'

const emojis = [
	{ value: 'positive', emoji: '😍' },
	{ value: 'neutral', emoji: '😐' },
	{ value: 'negative', emoji: '😩' }
]

function Emojis({ update, selected }) {
	return (
		<div className='emoji-picker'>
			{emojis.map(option => (
				<Emoji
					{...option}
					key={option.emoji}
					update={update}
					selected={selected === option.emoji}
				/>
			))}
			<EmojiPicker update={update} />
		</div>
	)
}
export default Emojis
