// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '<API-KEY>',
    authDomain: 'loginapp-7eb22.firebaseapp.com',
    databaseURL: 'https://loginapp-7eb22.firebaseio.com',
    projectId: 'loginapp-7eb22',
    storageBucket: 'loginapp-7eb22.appspot.com',
    messagingSenderId: '1010349462002'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
