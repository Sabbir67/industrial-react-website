import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged  } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading , setisLoading] = useState(true);
    const auth = getAuth();

    const signInUningGoogle = () => {

        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally();


    }

    // Observe User State Change
    useState( () => {
        const unsubscribed = onAuthStateChanged(auth ,  user => {
           if(user){
            setUser(user);
           }else{
            setUser({});
           }
           setisLoading(false); 
        }); 
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setisLoading(true); 

        signOut(auth)
        .then(() => {})
        .finally(() => setisLoading(false));
    }

    return {
        user, 
        isLoading,
        signInUningGoogle,
        logOut
    }
}


export default useFirebase;