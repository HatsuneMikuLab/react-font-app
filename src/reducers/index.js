export const initialState = {
  myFonts: [],
  fonts4sale: null,
  currTabIndex: 0,
  selectedFont: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_MY_FONTS': 
      return { ...state, myFonts: action.payload };
    case 'SET_FONTS_4_SALE': 
      return { ...state, fonts4sale: action.payload };
    case 'SET_TAB_INDEX':
      return { ...state, currTabIndex: action.payload };
    case 'SELECT_FONT':
      return { ...state, selectedFont: action.payload };
    default:
      throw new Error();
  }
};