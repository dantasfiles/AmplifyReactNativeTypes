// SignUp Configuration
// https://aws-amplify.github.io/docs/js/react#signup-configuration

import React from 'react';
import {Text} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

function App() {
  return <Text>App</Text>;
}
const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My custom email label',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    // and other custom attributes
  ],
};

export default withAuthenticator(App, {signUpConfig});
