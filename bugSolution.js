The corrected code uses async/await to ensure the Firebase app is initialized before accessing the database.  This prevents the premature access error.

```javascript
import firebase from 'firebase/app';
import 'firebase/database';

// Your Firebase config
const firebaseConfig = {
  // ... your config
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

async function fetchData() {
  try {
    await firebase.initializeApp(firebaseConfig);
    const snapshot = await database.ref('/your/path').once('value');
    const data = snapshot.val();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```