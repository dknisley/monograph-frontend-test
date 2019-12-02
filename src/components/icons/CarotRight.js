import React from 'react'

function CarotRight({
	style = {},
	fill = 'none',
	strokeColor = '#fff',
	strokeWidth = '2',
	width = '24',
	height = '24',
	className = '',
	viewBox = '0 0 24 24'
}) {
	return (
		<svg
			width={width}
			style={style}
			height={width}
			viewBox={viewBox}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			className={`svg-icon ${className || ''}`}>
			<path
				d='M9 18L15 12L9 6'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CarotRight
