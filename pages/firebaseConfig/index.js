import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmTVNgjibt7OSyOBmXYmDLJ7PorMnaakU",
  authDomain: "ds-tb-2-2023-lin.firebaseapp.com",
  projectId: "ds-tb-2-2023-lin",
  storageBucket: "ds-tb-2-2023-lin.appspot.com",
  messagingSenderId: "985542775216",
  appId: "1:985542775216:web:692c3b3e55cd306eb4c675"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {app, auth, storage, db}