import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const Tabs = ({ tabNames, currTabIndex, children, handleSelect }) => {
  const childs = React.Children.toArray(children);
  const tabs = tabNames.map((name, i) => (
    <li 
      key={i} 
      onClick={() => handleSelect(i)}
      className={`tab ${i === currTabIndex ? 'selected' : ''}`}
    >
      {name}
    </li>
  ));

	return (
		<>
      <ul className='tabsMenu'>
        {tabs}
      </ul>
      <div className='tabContent'>
        {childs[currTabIndex]}
      </div>
    </>
	);
};

Tabs.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currTabIndex: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Tabs;