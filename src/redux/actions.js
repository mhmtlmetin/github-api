import axios from 'axios';
import * as types from './types';

export function loadReposSuccess(repos) {
  return {
    type: types.LOAD_REPOS_SUCCESS,
    repos,
  };
}

export function loadRepos(user) {
  return function(dispatch) {
    return axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(repos => {
        dispatch(loadReposSuccess(repos.data));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function loadUserSuccess(user) {
  return {
    type: types.LOAD_USER_SUCCESS,
    user,
  };
}
export function loadUsers(user) {
  return function(dispatch) {
    return axios
      .get(`https://api.github.com/search/users?q=${Object.values(user)}`)
      .then(users => {
        dispatch(loadUserSuccess(users.data.items));
      })
      .catch(err => {
        throw err;
      });
  };
}
export function loadUserInfoSuccess(user) {
  return {
    type: types.LOAD_USER_INFO_SUCCESS,
    user,
  };
}
export function loadUserInfo(user) {
  return function(dispatch) {
    console.log(
      '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<' + Object.values(user),
    );
    return axios
      .get(`https://api.github.com/users/${Object.values(user)}`)
      .then(users => {
        let obj = {};
        for (const [key, value] of Object.entries(users.data)) {
          obj[key] = value;
        }
        dispatch(loadUserInfoSuccess(obj));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function loadFollowersSuccess(user) {
  return {
    type: types.LOAD_FOLLOWERS_SUCCESS,
    user,
  };
}
export function loadFollowers(user) {
  return function(dispatch) {
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    return axios
      .get(`https://api.github.com/search/users?q=${Object.values(user)}`)
      .then(users => {
        dispatch(loadUserSuccess(users.data.items));
      })
      .catch(err => {
        throw err;
      });
  };
}
