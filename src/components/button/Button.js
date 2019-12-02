import React from 'react'
import './Button.css'

function Button({ children, buttonType, action, classes }) {
	return (
		<button
			onClick={action}
			type={buttonType || 'button'}
			className={`button ${classes}`}>
			{children}
		</button>
	)
}

export default Button
