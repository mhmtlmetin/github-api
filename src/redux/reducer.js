import {
  LOAD_REPOS_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_INFO_SUCCESS,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWING_SUCCESS,
} from './types';
import {
  loadRepos,
  loadReposSuccess,
  loadUsers,
  loadUserSuccess,
} from './actions';
const initialState = {
  repos: [],
  user: '',
  userinfo: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS:
      return {...state, repos: action.repos};

    case LOAD_USER_SUCCESS:
      return {...state, user: action.user};
    case LOAD_USER_INFO_SUCCESS:
      return {...state, userinfo: action.user};
    case LOAD_FOLLOWERS_SUCCESS:
      return {...state, user: action.user};
    case LOAD_FOLLOWING_SUCCESS:
      return {...state, user: action.user};

    default:
      return state;
  }
}
