import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { unSplashData } from './unSplash.reducer';

const rootReducer = combineReducers({
  unSplashData,
  alert
});

export default rootReducer;