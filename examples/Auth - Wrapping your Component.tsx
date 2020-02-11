// Wrapping your Component
// https://aws-amplify.github.io/docs/js/authentication#wrapping-your-component

import React from 'react';
import {View, Text} from 'react-native';
import {Authenticator} from 'aws-amplify-react-native';

function App() {
  return <Text>App</Text>;
}

class AppWithAuth extends React.Component {
  render() {
    return (
      <View>
        <Authenticator>
          <App />
        </Authenticator>
      </View>
    );
  }
}

export default AppWithAuth;
