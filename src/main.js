export default ({ getState }) => next => (action) => {
  console.log('dispatching', JSON.stringify(action, null, '\t'));
  const result = next(action);
  console.log('next state', JSON.stringify(getState(), null, '\t'));
  return result;
};
