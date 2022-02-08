import React from 'react';
import PropTypes from 'prop-types';
import './FontCard.css';

const FontCard = ({ color, colorName, description, abbr, isSelected }) => {
	return (
		<div 
			className={`container ${isSelected ? 'selected' : ''}`}
		>
			<div 
				className='colorBadge'
				style={{ backgroundColor: color }}
			>
				<span className='abbr'>
					{abbr}
				</span>
			</div>
			<div className='fontDescription'>
				{description}
				<span>Color: {colorName}</span>
			</div>
		</div>
	);
};

FontCard.propTypes = {
	color: PropTypes.string.isRequired,
	colorName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	abbr: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
};

export default FontCard;