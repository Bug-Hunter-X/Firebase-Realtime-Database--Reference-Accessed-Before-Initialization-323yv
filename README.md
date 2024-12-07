# Firebase Realtime Database: Premature Reference Access

This repository demonstrates a common error when working with the Firebase Realtime Database: attempting to access a database reference before the Firebase app has finished initializing.  This can lead to unexpected behavior, crashes, or silent failures.

The `bug.js` file showcases the problematic code. The `bugSolution.js` file provides a corrected implementation ensuring proper initialization before database interaction.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install firebase`
3. Replace the placeholder Firebase configuration in `bug.js` and `bugSolution.js` with your own.
4. Run either `bug.js` or `bugSolution.js` (the `bug.js` version will likely fail).

## Key Learning

Always ensure your Firebase app is fully initialized (e.g., by using promises or async/await) before executing any database operations to prevent this common error.