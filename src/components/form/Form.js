import React, { useContext } from 'react'
import ReviewContext from '../../state/ReviewContext'
import EmojiPicker from '../emojis/Emojis'
import Button from '../button/Button'
import Icon from '../icons/'
import './Form.css'

function Form(props) {
	const {
		emoji,
		feedback,
		party,
		location,
		handleChange,
		handleSubmit
	} = useContext(ReviewContext)

	return (
		<div className='form'>
			<label className='form-label'>
				How was your meal{location && ` at ${location}`}?
			</label>
			<div>
				<EmojiPicker update={handleChange} selected={emoji} />
			</div>
			<label htmlFor='feedback' className='form-label'>
				Your feedback
			</label>
			<textarea
				className='form-textarea'
				name='feedback'
				rows='4'
				onChange={e => handleChange(e.target.name, e.target.value)}
				value={feedback}
				placeholder='Let us know what we did well or could improve...'
			/>

			<label htmlFor='number' className='form-label'>
				How many in your party?
			</label>
			<input
				className='form-input'
				type='number'
				name='party'
				min='1'
				onChange={e => handleChange(e.target.name, e.target.value)}
				value={party}
				placeholder='2'
			/>
			{/* Show the submit button if the user has chosen an emoji and entered feedback */}
			{emoji && feedback && party && (
				<Button classes='button--fixed' action={handleSubmit}>
					Post Review <Icon name='CarotRight' style={{ marginLeft: '.5rem' }} />
				</Button>
			)}
		</div>
	)
}

export default Form
