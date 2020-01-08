// Imports
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { map } from 'rxjs/operators';

// Conf
const app = firebase.initializeApp(process.env.firebase);

// Vars
const auth = firebase.auth(app);
const loggedIn = authState(auth).pipe(map((user) => user ? user : null));

/**
 * SignIn the user
 */
const signIn = () => {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  app.auth().signInWithPopup(authProvider);
};

/**
 * SignOut the user
 */
const signOut = async () => {
  await firebase.auth().signOut();
};

// Exports
export { app, loggedIn, signIn, signOut };
export default firebase;
