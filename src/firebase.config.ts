import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3gmdfSMWANk_bGiIcm2oYPxzox80i_Nc",
  authDomain: "bazar-c9053.firebaseapp.com",
  projectId: "bazar-c9053",
  storageBucket: "bazar-c9053.appspot.com",
  messagingSenderId: "582805834139",
  appId: "1:582805834139:web:eb558164a93d4da818393e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
