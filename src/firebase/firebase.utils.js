import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHoiPTHt2FL5X2k-2E3lmDCaXiSOYv88o",
    authDomain: "crwn-db-40952.firebaseapp.com",
    databaseURL: "https://crwn-db-40952.firebaseio.com",
    projectId: "crwn-db-40952",
    storageBucket: "",
    messagingSenderId: "269879749930",
    appId: "1:269879749930:web:1cfea30c94bc514c"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestroe.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestroe = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propt: ' select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;