import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        `Go to your firebase -> 
                        project setting -> 
                            general -> 
                                your apps -> 
                                    select config -> 
                                        copy all inside of {}`
    }
)

const db = firebaseApp.firestore();

export default db;