// S3Image
// https://aws-amplify.github.io/docs/js/storage#s3image

import React from 'react';
import {S3Image} from 'aws-amplify-react-native';

const image_body = {};
const key = 'key';
function render() {
  return <S3Image level="protected" body={image_body} imgKey={key} />;
}

export {render};
