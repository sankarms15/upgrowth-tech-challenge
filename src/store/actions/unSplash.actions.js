import { unSplashConstants } from '../../constants';
import { gitUnSplashService } from '../../services';

export const getUnSplashActions = {
    getUnSplash
};
let requestId = 0;
function getUnSplash(searchQuery) {
    return dispatch => {
        const id = ++requestId;
        dispatch(request());
        dispatch(failure());
        gitUnSplashService.getUnSplashPhotos(searchQuery).then((data) => {
            if(id === requestId) {
                dispatch(success(data));
            } else {
                dispatch(failure('something failed'));
            }
        }, (error) => {
            if(id === requestId) {
                dispatch(failure(error.toString()));
            }
        });
    };

    function request() { return { type: unSplashConstants.GET_UNSPLASH_REQUEST } }
    function success(data) { return { type: unSplashConstants.GET_UNSPLASH_SUCCESS, data } }
    function failure(error) { return { type: unSplashConstants.GET_UNSPLASH_FAILURE, error } }
}

