import React from 'react'
import './App.css'
import ReviewProvider from './state/ReviewProvider'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Preview from './components/preview/Preview'
import Thanks from './components/thanks/Thanks'

function App() {
	return (
		<div className='app'>
			<Header />
			<main className='app-main'>
				<ReviewProvider>
					<section className='app-left'>
						<Form />
					</section>
					<section className='app-right'>
						<Preview />
					</section>
					<Thanks />
				</ReviewProvider>
			</main>
		</div>
	)
}

export default App
