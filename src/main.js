export default ({ logActions = true, logState = true } = {}) =>
  ({ getState }) => next => (action) => {
    if (logActions) {
      console.log('dispatching', JSON.stringify(action, null, '\t'));
    }
    const result = next(action);
    if (logState) {
      console.log('next state', JSON.stringify(getState(), null, '\t'));
    }
    return result;
  };
