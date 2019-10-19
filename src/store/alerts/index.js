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

/**
 * @description Remove alert from list.
 * @param {Object} state
 * @param {Object} payload
 */
const remove = (state, payload) => (state.filter(({ _id }) => _id !== payload))

const alerts = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case constants.ADD:
      return add(state, action.payload);
    case constants.SAVE:
      return save(action.payload);
    case constants.DELETE:
      return remove(state, action.payload)
    default:
      return state;
  }
};

export default alerts;
