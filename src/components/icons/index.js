import React from 'react'
import AddEmoji from './AddEmoji'
import CarotRight from './CarotRight'

function Icon(props) {
	switch (props.name) {
		case 'CarotRight':
			return <CarotRight {...props} />
		case 'AddEmoji':
			return <AddEmoji {...props} />
		default:
			return
	}
}

export default Icon
