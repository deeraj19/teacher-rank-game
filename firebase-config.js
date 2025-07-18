
const firebaseConfig = {
  apiKey: "AIzaSyCemh-HHFl6-BcjyYZ0r3a69FGOPUxvaB4",
  authDomain: "teacher-ran-game.firebaseapp.com",
  databaseURL: "https://teacher-ran-game-default-rtdb.firebaseio.com",
  projectId: "teacher-ran-game",
  storageBucket: "teacher-ran-game.firebasestorage.app",
  messagingSenderId: "100586523510",
  appId: "1:100586523510:web:abf9218714637e64780857",
  measurementId: "G-RNDVQ9Y364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);