// @flow
const isDev = process.env.NODE_ENV === 'development';

export const GDevelopGamePreviews = {
  baseUrl: `https://game-previews.gdevelop-app.com/`,
};

export const GDevelopBuildApi = {
  baseUrl: isDev
    ? 'https://69p4m07edd.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/build',
};

export const GDevelopFirebaseConfig = {
  apiKey: 'AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc',
  authDomain: 'gdevelop-services.firebaseapp.com',
  databaseURL: 'https://gdevelop-services.firebaseio.com',
  projectId: 'gdevelop-services',
  storageBucket: 'gdevelop-services.appspot.com',
  messagingSenderId: '44882707384',
};

export const GDevelopUsageApi = {
  baseUrl: isDev
    ? 'https://dwjjhr5k76.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/usage',
};

export const GDevelopReleaseApi = {
  baseUrl: isDev
    ? 'https://c8cldf4iqh.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/release',
};

export const GDevelopExtensionApi = {
  baseUrl: isDev
    ? 'https://raw.githubusercontent.com/4ian/GDevelop-extensions/master'
    : 'https://raw.githubusercontent.com/4ian/GDevelop-extensions/master',
};

export const GDevelopAssetApi = {
  baseUrl: isDev
    ? 'https://57l4cj31aj.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://api.gdevelop-app.com/asset',
};
