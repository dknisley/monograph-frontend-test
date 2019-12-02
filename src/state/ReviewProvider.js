import React, { useState } from 'react'
import ReviewContext from './ReviewContext'

const ReviewProvider = props => {
	// Get any location queries from the URL
	const urlParams = new URLSearchParams(window.location.search)
	const location = urlParams.get('location') || ''

	const [reviewState, setReviewState] = useState({
		emoji: '😍',
		feedback: '',
		party: '',
		location,
		submitted: false
	})

	const handleChange = (key, value) => {
		setReviewState({
			...reviewState,
			[key]: value
		})
	}

	const handleSubmit = () => {
		setReviewState({
			...reviewState,
			submitted: true
		})
	}

	return (
		<ReviewContext.Provider
			value={{ ...reviewState, reviewState, handleChange, handleSubmit }}>
			{props.children}
		</ReviewContext.Provider>
	)
}

export default ReviewProvider
