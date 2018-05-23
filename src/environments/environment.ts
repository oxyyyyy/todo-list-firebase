// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAJuZLuk-6dwnKykCuwSxdZZCxZkvLz3M0',
    authDomain: 'todo-list-firebase-ca954.firebaseapp.com',
    databaseURL: 'https://todo-list-firebase-ca954.firebaseio.com',
    projectId: 'todo-list-firebase-ca954',
    storageBucket: '',
    messagingSenderId: '950939193397'
  }
};
