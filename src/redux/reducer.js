import {CAMPSITES} from '../shared/campsites';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';

export const initialState = { 
    campsites: CAMPSITES,
    partners: PARTNERS,
    promotions: PROMOTIONS,
    comments: COMMENTS
}

export const Reducer = (state = initialState, action) => {return state}