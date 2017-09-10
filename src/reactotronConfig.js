/* @flow */
/* eslint-disable import/no-extraneous-dependencies */
if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;
  const {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
  } = require('reactotron-react-native');

  Reactotron
    .configure({
      name: 'React Native Hello'
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect();
}
