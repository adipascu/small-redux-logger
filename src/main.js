export default ({ logActions = true, logState = true } = {}) =>
  ({ getState }) => next => (action) => {
    if (logActions) {
      console.log('Dispatching' + JSON.stringify(action, null, '\t'));
    }
    const result = next(action);
    if (logState) {
      console.log('Next state' + JSON.stringify(getState(), null, '\t'));
    }
    return result;
  };
