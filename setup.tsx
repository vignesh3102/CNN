
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCOP7Bf12isIgbpx_T89A2NtY31zc21I6U",
  authDomain: "cnn-clone-5b6be.firebaseapp.com",
  projectId: "cnn-clone-5b6be",
  storageBucket: "cnn-clone-5b6be.appspot.com",
  messagingSenderId: "293936606366",
  appId: "1:293936606366:web:786fd4b8d90444c72c9f8f"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)