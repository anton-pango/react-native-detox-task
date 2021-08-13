# react-native-detox-task

> Project bootstrap with `react-native init` and configured with [Detox](https://github.com/wix/Detox) to provide End-to-End testing

## Setup project

```bash
~ git clone https://github.com/anton-pango/react-native-detox-task
~ cd e2e-react-native-detox
~ yarn
```

## Running Application

### Launch iOS app

```bash
~ cd ios; pod install; cd -;
~ react-native run-ios
```

### Launch Android app

```bash
~ react-native run-android
```

## Running Detox Tests with iOS

Detox is an End-to-End framework focused in mobile applications, in this case it's being used to run tests for a React Native application.

In order to run the tests, first you need to compile the application:

```bash
~ yarn e2e:ci
```

## Troubleshooting
If ios build fails with xcode 12.5 next fix will help: https://github.com/react-native-community/cli/issues/1365#issuecomment-840959451

![Detox running](./docs/e2e-full-test.gif)

## Exercise

TODO:
1. Add detox configuration for android
2. Create 3-5 tests to cover the App functionality
3. Make sure all tests passed successfully on both platforms

## Deliverable
* **Source Code**: Either of the following ways to bundle the code, whatever is easier for you:
    * A `zip` file containing the whole project. Remember to skip binaries, logs, etc. if you choose this option.
    * A link to an accessible private repository with your work in (Github or Bitbucket).

* **Documentation** / **Instructions**: You can bundle it together with the code.
    * Add instructions to `Readme.md` on how to run tests
    * A screenshot of command line or screen record with passed tests on both platform

## License

MIT.
