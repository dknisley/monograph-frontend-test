import React, { useContext } from 'react'
import ReviewContext from '../../state/ReviewContext'
import Party from './Party'
import Feedback from './Feedback'
import EmojiPreview from './EmojiPreview'
import './Preview.css'

function Preview({ label }) {
	const { emoji, feedback, party, location } = useContext(ReviewContext)

	return (
		<section className='preview'>
			<div className='preview-label'>{label || 'Preview of your review'}</div>
			<div className='preview-content'>
				<EmojiPreview emoji={emoji} />
				<Feedback feedback={feedback} />
				<Party party={party} location={location} />
			</div>
		</section>
	)
}

export default Preview
