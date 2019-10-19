export const constants = {
  ADD: 'ALERT_ADD',
  SAVE: 'ALERT_SAVE',
  DELETE: 'ALERT_DELETE',
};

/**
 * @description Add item in array of alerts.
 * @param {{ email: string time: string keywords: string }} payload Token and user to save.
 */
export const add = payload => ({
  type: constants.ADD,
  payload,
});

/**
 * @description Save array of alerts.
 * @param {[{ email: string time: string keywords: string }]} payload
 */
export const save = payload => ({
  type: constants.SAVE,
  payload,
});

/**
 * @description Remove item from array of alerts.
 * @param {String} payload Id of alert.
 */
export const remove = payload => ({
  type: constants.DELETE,
  payload,
})
