import React from 'react'

function Emoji({ emoji, value, selected, update }) {
	return (
		<div className='emoji-picker__choice'>
			<input
				id={value}
				type='radio'
				name='emoji'
				onChange={e => update(e.target.name, e.target.value)}
				value={emoji}
				className='emoji-picker__radio'
				checked={selected}
			/>
			<label htmlFor={value} className='emoji-picker__label'>
				<span className='emoji-picker__emoji'>{emoji}</span>
			</label>
		</div>
	)
}

export default Emoji
