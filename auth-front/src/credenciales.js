// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU__Mwa6Nlgb_K6v9kuka0EZ1kzhcOsNA",
  authDomain: "foodforlife-bfb15.firebaseapp.com",
  projectId: "foodforlife-bfb15",
  storageBucket: "foodforlife-bfb15.appspot.com",
  messagingSenderId: "365950591511",
  appId: "1:365950591511:web:245a694931255488fa3252"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;