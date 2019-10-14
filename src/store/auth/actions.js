export const constants = {
  LOGIN: 'AUTH_LOGIN',
  LOGOUT: 'AUTH_LOGOUT',
};

/**
 * @description User sign in
 * @param {{ user: Object token: String }} payload Token and user to save.
 * @returns {{ type: string payload: * }}
 */
export const login = payload => ({
  type: constants.LOGIN,
  payload,
});

/**
 * User sign out
 * @returns {{ type: string }}
 */
export const logout = () => ({ type: constants.LOGOUT });
