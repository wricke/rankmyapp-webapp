export const constants = {
  ADD: 'ALERT_ADD',
  SAVE: 'ALERT_SAVE',
};

/**
 * @description ADd item in array of alerts.
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
