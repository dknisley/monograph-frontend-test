import React from 'react'
import Picker from 'emoji-picker-react'
import Dropdown from './Dropdown'
import Icon from '../icons'

function EmojiPicker({ update }) {
	const handleChange = (e, emojiObject) => {
		update('emoji', emojiObject.emoji)
	}

	return (
		<Dropdown dropTrigger={<Icon name='AddEmoji' />}>
			<Picker onEmojiClick={handleChange} />
		</Dropdown>
	)
}

export default EmojiPicker
