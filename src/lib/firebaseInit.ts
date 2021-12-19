import {initializeApp} from "firebase/app";
import {firebaseConfig} from "@/lib/firebaseConfig";
import {getDatabase} from "firebase/database";

export const firebaseInit = () => {
  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}
