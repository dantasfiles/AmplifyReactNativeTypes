// Customize UI Theme
// https://aws-amplify.github.io/docs/js/authentication#customize-ui-theme

import React from 'react';
import {Authenticator, AmplifyTheme} from 'aws-amplify-react-native';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, {
  background: 'orange',
});
const MyTheme: typeof AmplifyTheme = Object.assign({}, AmplifyTheme, {
  sectionHeader: MySectionHeader,
});

<Authenticator theme={MyTheme} />;
