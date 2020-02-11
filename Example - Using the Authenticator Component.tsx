// Using the Authenticator Component
// https://aws-amplify.github.io/docs/js/authentication#using-the-authenticator-component

import React from 'react';
import {
  Authenticator,
  AmplifyTheme,
  Loading,
  ConfirmSignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword,
  VerifyContact,
  Greetings,
} from 'aws-amplify-react-native';

const CognitoUser = {};
const myCustomTheme = AmplifyTheme;
function myMessageMap(x: string) {
  return x;
}
function App() {
  return (
    <Authenticator
      // Optionally hard-code an initial state
      authState="signIn"
      // Pass in an already authenticated CognitoUser or FederatedUser object
      authData={CognitoUser || 'username'}
      // Fired when Authentication State changes
      onStateChange={authState => console.log(authState)}
      // An object referencing federation and/or social providers
      // The federation here means federation with the Cognito Identity Pool Service
      // *** Only supported on React/Web (Not React Native) ***
      // For React Native use the API Auth.federatedSignIn()
      // federated={myFederatedConfig}
      // A theme object to override the UI / styling
      theme={myCustomTheme}
      // Hide specific components within the Authenticator
      // *** Only supported on React/Web (Not React Native)  ***
      //   hide={[
      //     Greetings,
      //     SignIn,
      //     ConfirmSignIn,
      //     RequireNewPassword,
      //     SignUp,
      //     ConfirmSignUp,
      //     VerifyContact,
      //     ForgotPassword,
      //     TOTPSetup,
      //     Loading,
      //   ]}
      // or hide all the default components
      hideDefault={true}
      // Pass in an aws-exports configuration
      // NEXT LINE NOT REACT NATIVE
      // amplifyConfig={myAWSExports}
      // Pass in a message map for error strings
      errorMessage={myMessageMap}>
      // Default components can be customized/passed in as child components. //
      Define them here if you used hideDefault={true}
      <Greetings />
      {/* NOT IN REACT NATIVE */}
      {/* <SignIn federated={myFederatedConfig} /> */}
      <ConfirmSignIn />
      <RequireNewPassword />
      <SignUp />
      <ConfirmSignUp />
      <VerifyContact />
      <ForgotPassword />
      {/* NOT IN REACT NATIVE */}
      {/* <TOTPSetup /> */}
      <Loading />
    </Authenticator>
  );
}

export {App};
