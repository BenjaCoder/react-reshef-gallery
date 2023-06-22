import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZU9JIstYZsIuMbduJHWZ25Jz7Q02vpIg",
    authDomain: "reshef-data.firebaseapp.com",
    projectId: "reshef-data",
    storageBucket: "reshef-data.appspot.com",
    messagingSenderId: "958796501537",
    appId: "1:958796501537:web:812ee0420a6eb509e54960"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

async function getCards(db) {
    const cardsCollection = collection(db, 'reshef');
    const cardsSnapshot = await getDocs(cardsCollection);
    const cardList = cardsSnapshot.docs.map(doc => doc.data());
    return cardList;
}