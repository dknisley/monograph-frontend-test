import React, { useContext } from 'react'
import ReviewContext from './state/ReviewContext'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Preview from './components/preview/Preview'

function Review() {
	const { submitted } = useContext(ReviewContext)

	return (
		<section className={`app-wrapper ${submitted && 'app-wrapper--withModal'}`}>
			<Header />
			<main className='app-main'>
				<section className='app-left'>
					<Form />
				</section>
				<section className='app-right'>
					<Preview />
				</section>
			</main>
		</section>
	)
}

export default Review
