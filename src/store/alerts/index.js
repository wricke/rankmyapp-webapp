import { constants } from './actions';

const DEFAULT_STATE = [];

/**
 * @description Save list of alerts.
 * @param {Array} payload
 */
const save = payload => payload;

/**
 * @description Add alert in alerts list.
 * @param {Object} state
 * @param {Object} payload
 */
const add = (state, payload) => (state.concat(payload));

const alerts = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.ADD:
      return add(state, action.payload);
    case constants.SAVE:
      return save(action.payload);
    default:
      return state;
  }
};

export default alerts;
