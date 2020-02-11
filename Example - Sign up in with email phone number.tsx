// Sign up/in with email/phone number
// https://aws-amplify.github.io/docs/js/react#sign-upin-with-emailphone-number

import React from 'react';
import {Text} from 'react-native';
import {withAuthenticator, Authenticator} from 'aws-amplify-react-native';
function App() {
  return <Text>App</Text>;
}

// When using Authenticator
class EmailApp1 {
  // ...
  render() {
    return <Authenticator usernameAttributes="email" />;
  }
}
// When using withAuthenticator
const EmailApp2 = withAuthenticator(App, {usernameAttributes: 'email'});

class PhoneApp1 {
  // ...
  render() {
    return <Authenticator usernameAttributes="phone_number" />;
  }
}
// When using withAuthenticator
const PhoneApp2 = withAuthenticator(App, {usernameAttributes: 'phone_number'});

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My user name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string',
    },
  ],
};
const usernameAttributes = 'My user name';
const SignUpConfigApp = withAuthenticator(App, {
  signUpConfig,
  usernameAttributes,
});

export {EmailApp1, EmailApp2, PhoneApp1, PhoneApp2, SignUpConfigApp};
