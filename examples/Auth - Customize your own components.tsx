// Customize your own components
// https://aws-amplify.github.io/docs/js/authentication#customize-your-own-components

import React from 'react';
import {SignIn, Authenticator, AuthPiece} from 'aws-amplify-react-native';

function App() {
  return (
    <Authenticator hideDefault={true}>
      <SignIn />
      {/* NEXT LINE NOT REACT NATIVE */}
      {/* <MyCustomSignUp override={'SignUp'} /> */}
      <MyCustomSignUp />
    </Authenticator>
  );
}

interface iMyCustomSignUpProps {
  onStateChange?: (state: string, data: unknown) => void;
  authState?: string;
}
class MyCustomSignUp extends AuthPiece {
  constructor(props: iMyCustomSignUpProps) {
    super(props);
    this.gotoSignIn = this.gotoSignIn.bind(this);
  }

  gotoSignIn() {
    // NEEDS THIS TO TYPECHECK
    if (this.props.onStateChange) {
      // to switch the authState to 'signIn'
      this.props.onStateChange('signIn', {});
    }
  }

  render() {
    return (
      <div>
        {/* only render this component when the authState is 'signUp' */}
        {this.props.authState === 'signUp' && (
          <div>
            My Custom SignUp Component
            <button onClick={this.gotoSignIn}>Goto SignIn</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
