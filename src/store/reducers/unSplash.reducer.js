import { unSplashConstants } from '../../constants';

const intialState = {
  loading: false,
  error: null,
  data: null
}

export function unSplashData(state = intialState, action) {
  switch (action.type) {
    case unSplashConstants.GET_UNSPLASH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case unSplashConstants.GET_UNSPLASH_SUCCESS:
    {
      console.log('action', action.data)
      return {
        ...state,
        loading: false,
        data: action.data
      };
    }
    case unSplashConstants.GET_UNSPLASH_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}