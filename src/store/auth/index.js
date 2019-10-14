import { constants } from './actions';

const DEFAULT_STATE = {
  user: null,
  token: null,
};

/**
 * User sign in
 * @param user User info
 * @param token Auth token
 * @returns {{ user: * token: * }}
 */
const login = ({ user, token }) => {
  return { user, token };
};

/**
 * @description User logout, returning default state
 * @returns {{ user: null token: null }}
 */
const logout = () => DEFAULT_STATE;

/**
 * @description Reducer map
 * @param state
 * @param action
 */
const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return login(action.payload);
    case constants.LOGOUT:
      return logout();
    default:
      return state;
  }
};

export default auth;
