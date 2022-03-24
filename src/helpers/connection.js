import firebase from 'firebase/compat/app';
import firebaseConfig from './apiKeys.json';
// const firebase = import('firebase/compat/app');

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseConfig);
  }
};

export default firebaseApp;
