// Using withAuthenticator HOC
// https://aws-amplify.github.io/docs/js/authentication#using-withauthenticator-hoc

import React from 'react';
import {Text} from 'react-native';
import {withAuthenticator, AuthPiece} from 'aws-amplify-react-native';
function App() {
  return <Text>App</Text>;
}

const App1 = withAuthenticator(App);

const MyComponents: typeof AuthPiece[] = [];
const App2 = withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: true,
  // Show only certain components
  authenticatorComponents: MyComponents,
  // display federation/social provider buttons
  // NEXT LINE NOT REACT NATIVE
  // federated: {myFederatedConfig},
  // customize the UI/styling
  // NEXT LINE NOT REACT NATIVE
  // theme: {myCustomTheme},
});

export {App1, App2};
