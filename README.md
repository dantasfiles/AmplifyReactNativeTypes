The [`aws-amplify-react-native.d.ts` file](https://github.com/dantasfiles/AmplifyReactNativeTypes/blob/master/aws-amplify-react-native.d.ts) contains custom type declarations for the [`aws-amplify-react-native` package](https://github.com/aws-amplify/amplify-js/tree/master/packages/aws-amplify-react-native). 

The [`examples` directory](https://github.com/dantasfiles/AmplifyReactNativeTypes/tree/master/examples) contains examples from the AWS Amplify documentation.
The examples successfully typecheck in Typescript, and you can open them in an IDE like VSCode to examine the types.

This is a short-term stopgap solution, as the `aws-amplify-react-native` package is being rewritten by AWS in their [Amplify UI Component Library Refactor]( 
https://github.com/aws-amplify/amplify-js/issues/3279)

Some of the types may be incorrect, as I'm trying to make inferences about code written by AWS developers. Please do not hesistate to open an issue or pull request with suggestions or corrections.
