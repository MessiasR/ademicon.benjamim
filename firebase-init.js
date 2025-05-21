// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtglLEILTBGsjMMu-4MgASiOPxB09J54k",
  authDomain: "vendas-benjamim.firebaseapp.com",
  projectId: "vendas-benjamim",
  storageBucket: "vendas-benjamim.firebasestorage.app",
  messagingSenderId: "724497746206",
  appId: "1:724497746206:web:da08123fbf66ac60bfa10f",
  measurementId: "G-N663CRJV9H"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
