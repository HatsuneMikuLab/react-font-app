import React from 'react';
import { useReducer, useState, useEffect } from 'react';
import './Layout.css';
import Tabs from '../tabs';
import FontCard from '../font-card';
import { initialState, reducer } from '../../reducers';


const Layout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const myFontsRes = await (await fetch('http://json.ffwagency.md/fonts_a')).json();
        const fonts4saleRes = await (await fetch('http://json.ffwagency.md/fonts_b')).json();
        dispatch({
          type: 'SET_MY_FONTS',
          payload: myFontsRes?.content,
        });
        dispatch({
          type: 'SET_FONTS_4_SALE',
          payload: fonts4saleRes?.content,
        });
        setLoading(false);
      } catch (error) {
        console.log('ERROR', error);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <h2 className='loading'>I am too lazy to make a fancy spinner</h2>
    )
  }

  const myFonts = state.myFonts.map((font, i) => (
    <div
      key={i}
      onClick={() => dispatch({
        type: 'SELECT_FONT',
        payload: i,
      })}
    >
      <FontCard 
        color={font?.color}
        colorName={font?.['color-blind-label']}
        description={font?.label}
        abbr={font?.abbr}
        isSelected={state?.selectedFont === i}
      />
    </div>
  ));

	return (
		<>
      <Tabs 
        tabNames={['My fonts', 'Buy fonts']}
        currTabIndex={state.currTabIndex}
        handleSelect={index => dispatch({
          type: 'SET_TAB_INDEX',
          payload: index,
        })}
      >
        <div>
          {myFonts}
        </div>
        <div className='centeredText'>
          <div>{state?.fonts4sale}</div>
        </div>
      </Tabs>
    </>
		
	);
};

export default Layout;