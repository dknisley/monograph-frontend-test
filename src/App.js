import React from 'react'
import './App.css'
import ReviewProvider from './state/ReviewProvider'
import Review from './Review'
import Thanks from './components/thanks/Thanks'

function App() {
	return (
		<div className='app'>
			<ReviewProvider>
				<Review />
				<Thanks />
			</ReviewProvider>
		</div>
	)
}

export default App
