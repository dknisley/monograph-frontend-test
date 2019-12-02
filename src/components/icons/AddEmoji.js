import React from 'react'

function AddEmoji({
	style = {},
	fill = '#B7C7D4',
	strokeColor = '#B7C7D4',
	strokeWidth = '3.5',
	width = '42',
	height = '42',
	className = '',
	viewBox = '0 0 42 42'
}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill='none'
			className={`svg-icon ${className || ''}`}
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14 24.5C14 24.5 16.625 28 21 28C25.375 28 28 24.5 28 24.5'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.75 15.75H15.7675'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M26.25 15.75H26.2675'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5.25 21C5.25 12.3015 12.3015 5.25 21 5.25C23.8082 5.25 26.4448 5.98494 28.7278 7.27298C29.2458 6.18799 30.0168 5.24698 30.9644 4.52633C28.0577 2.76435 24.6473 1.75 21 1.75C10.3685 1.75 1.75 10.3685 1.75 21C1.75 31.6315 10.3685 40.25 21 40.25C31.6315 40.25 40.25 31.6315 40.25 21C40.25 19.512 40.0812 18.0634 39.7616 16.6724C38.7982 17.3389 37.6711 17.7856 36.4529 17.94C36.6478 18.9299 36.75 19.953 36.75 21C36.75 29.6985 29.6985 36.75 21 36.75C12.3015 36.75 5.25 29.6985 5.25 21Z'
				fill={fill}
			/>
			<rect x='34' y='5' width='3' height='11' rx='1.5' fill={fill} />
			<rect
				x='30'
				y='12'
				width='3'
				height='11'
				rx='1.5'
				transform='rotate(-90 30 12)'
				fill={fill}
			/>
		</svg>
	)
}

export default AddEmoji
