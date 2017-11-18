# Universal React Native Starter App.

--
this is a basic boilerplate for an application using react native to reuse most of the code for iOS, Android & web.

## Technologies
- react
- react-native
- react-native-web
- haul
- jest
- eslint
- webpack


## Setup
```
git clone <REPOSITORY>
cd <PROJECT>
yarn/npm install
```

## Development

### Web
```
yarn web
# or
npm run web
```

### Mobile: For web you need two shells
```
# shell 1:
yarn haul
# or
npm run haul

# shell 2
# depending on the platform that you are working on (iOS or Android)
yarn ios/android
# or
npm run ios/android
```

## Disclaimer
**This is a WIP**. I don't recomment to use this repo as is in production right now. If you feel & have the time to contribute to the project you're so welcome to it :)


## TODOs

- [ ] include .eslintrc base config
- [ ] setup Jest properly
- [ ] fix aliases + eslint
- [ ] test everything in Android
