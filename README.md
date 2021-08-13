# react-native-detox-task

> Project bootstrap with `react-native init` and configured with [Detox](https://github.com/wix/Detox) to provide End-to-End testing

## Setup project

```bash
~ git clone https://github.com/anton-pango/react-native-detox-task
~ cd e2e-react-native-detox
~ yarn
```

## Running Application

### Lauch iOS app

```bash
~ cd ios; pod install; cd -;
~ react-native run-ios
```

### Lauch Android app

```bash
~ react-native run-android
```

## Running Detox Tests with iOS

Detox is a End-to-End framework focused in mobile applications, in this case it's being used to run tests for a React Native application.

In order to run the tests, first you need to compile the application:

```bash
~ yarn e2e:ci
```

![Detox running](./docs/e2e-full-test.gif)

## Exercise

Tests are located under:

* /e2e/my-test.test.js

Please add as many tests as you think can cover the App functionality

## Deliverable
* **Source Code**: Either of the following ways to bundle the code, whatever is easier for you:
    * A `zip` file containing the whole project. Remember to skip binaries, logs, etc if you choose this option.
    * A link to an accessible private repository with your work in (Github or Bitbucket).

* **Documentation** / **Instructions**: You can bundle it together with the code.
    * A `Readme.md` file explaining the assumptions and decisions you've made solving this task including technology and library choices.
    * Any instructions required to run your solution and tests in a Linux environment.

## License

MIT.
