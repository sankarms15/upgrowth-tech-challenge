import axios from 'axios';

import {
  API_URL,
  client_id,
} from '../config';

export const gitUnSplashService = {
    getUnSplashPhotos
};

function getUnSplashPhotos(query) {
    return axios.get(`${API_URL}/search/photos?&page=1&query=${query}&client_id=${client_id}`)
        .then(res => res.data)
        .catch(err => {
            const error = (err.data && err.data.message) || err.statusText;
            return error;
        });
}