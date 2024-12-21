import { ref, onValue } from "firebase/database";
import { database } from "./firebaseConfig";

export const listenToData = (key, callback) => {
  const dbRef = ref(database, key);
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
