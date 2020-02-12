// Refreshing JWT Tokens
// https://aws-amplify.github.io/docs/js/authentication#react-components

import React from 'react';
import {Button} from 'react-native';
import {withOAuth} from 'aws-amplify-react-native';

function refreshToken() {
  // refresh the token here and get the new token info
  const token = null;
  const expires_at = null;
  const identity_id = null;
  // ......
  return new Promise((res, _) => {
    const data = {
      token, // the token from the provider
      expires_at, // the timestamp for the expiration
      identity_id, // optional, the identityId for the credentials
    };
    res(data);
  });
}

interface iMyAppProps {
  loading: boolean;
  oAuthUser: unknown;
  oAuthError: unknown;
  hostedUISignIn: () => void;
  facebookSignIn: () => void;
  amazonSignIn: () => void;
  googleSignIn: () => void;
  customProviderSignIn: (provider: string) => void;
  signOut: () => void;
}
class MyApp extends React.Component<iMyAppProps> {
  // ...
  render() {
    return (
      <Button title="Sign in with AWS" onPress={this.props.amazonSignIn} />
    );
  }
}

const OAuthApp = withOAuth(MyApp);

export {OAuthApp, refreshToken};
