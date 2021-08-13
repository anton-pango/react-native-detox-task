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

## License

MIT.
