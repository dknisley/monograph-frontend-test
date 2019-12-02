import React, { useState, useRef, useEffect } from 'react'

function Dropdown({ children, dropTrigger }) {
	const [isOpen, setIsOpen] = useState(false)
	const dropdown = useRef(null)

	const handleClick = e => {
		e.preventDefault()
		setIsOpen(!isOpen)
	}

	const handleClickOutside = e => {
		if (isOpen && dropdown.current && !dropdown.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})
	return (
		<div
			className={`custom-emoji-picker ${isOpen &&
				'custom-emoji-picker--isOpen'}`}
			ref={dropdown}>
			<button
				type='button'
				className='emoji-picker__label emoji-picker__label--addnew'
				onClick={handleClick}>
				{dropTrigger}
			</button>
			{children}
		</div>
	)
}

export default Dropdown
