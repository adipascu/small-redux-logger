# Simple redux logger

A logger for redux that is very small and fast.



## Usage
```javascript
import { applyMiddleware, createStore } from 'redux';

import logger from 'small-redux-logger';
const store = createStore(
  reducer,
  applyMiddleware(logger())
)
```

## Options
```javascript
{
  logActions: true, // will log redux actions
  logState: true, // will log redux state
}
```

For a more feature complete alternative see [redux-logger](https://www.npmjs.com/package/redux-logger)