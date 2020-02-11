// S3Album
// https://aws-amplify.github.io/docs/js/storage#s3album

import React from 'react';
import {S3Album} from 'aws-amplify-react-native';

const path = './path';
function render() {
  return (
    <S3Album
      level="protected"
      path={path}
      filter={item => /jpg/i.test(item.path)}
    />
  );
}

export {render};
