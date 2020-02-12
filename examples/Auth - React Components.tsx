// React Components
// https://aws-amplify.github.io/docs/js/authentication#react-components

import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import {withOAuth} from 'aws-amplify-react-native';

interface iAppProps {
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

class App extends React.Component<iAppProps> {
  render() {
    const {
      oAuthUser: user,
      oAuthError: error,
      hostedUISignIn,
      facebookSignIn,
      googleSignIn,
      amazonSignIn,
      customProviderSignIn,
      signOut,
    } = this.props;

    return (
      <SafeAreaView style={styles.safeArea}>
        {user && (
          <Button title="Sign Out" onPress={signOut} /* icon="logout" */ />
        )}
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text>{JSON.stringify({user, error}, null, 2)}</Text>
          {!user && (
            <React.Fragment>
              {/* Go to the Cognito Hosted UI */}
              <Button title="Cognito" onPress={hostedUISignIn} />

              {/* Go directly to a configured identity provider */}
              <Button title="Facebook" onPress={facebookSignIn} />
              <Button title="Google" onPress={googleSignIn} />
              <Button title="Amazon" onPress={amazonSignIn} />

              {/* e.g. for OIDC providers */}
              <Button
                title="Yahoo"
                onPress={() => customProviderSignIn('Yahoo')}
              />
            </React.Fragment>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const OAuthApp = withOAuth(App);

export default OAuthApp;
