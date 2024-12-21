import { ref, set } from "firebase/database";
import { database } from "./firebaseConfig";

export const saveData = (key, value) => {
  set(ref(database, key), value)
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
};
