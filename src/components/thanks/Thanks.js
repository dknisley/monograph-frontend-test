import React, { useContext } from 'react'
import ReviewContext from '../../state/ReviewContext'
import Preview from '../preview/Preview'
import './Thanks.css'

function Thanks() {
	const { submitted } = useContext(ReviewContext)
	return (
		<section className={`thanks ${submitted && 'thanks--isactive'}`}>
			<div className='thanks__message'>
				<span role='img' aria-label='Thank You' className='thanks__emoji'>
					🎉👍💯
				</span>
				Thanks for your feedback
			</div>
			<Preview label=' ' />
		</section>
	)
}

export default Thanks
