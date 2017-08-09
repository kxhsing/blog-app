import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // ES5 way of doing things:
            // const post = action.payload.data;
            // const newState = { ...state }; //taking current state and going to make new one with new post id
            // newState[post.id] = post;
            // return newState;

            return { ...state, [action.payload.data.id]: action.payload.data }; //adding addition of new post data (key is id) is in new state

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}