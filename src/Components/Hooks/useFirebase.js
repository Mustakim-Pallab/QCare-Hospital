import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import initializeFirebase from '../Firebase/Firebase.initialize';

initializeFirebase()

const useFirebase = () => {
    const [User, setUser] = useState({})
    const auth=getAuth()
    const Provider=new GoogleAuthProvider()

    const SignInWithGoogle=()=>{
        return signInWithPopup(auth,Provider)
    }
    const EmailAndPasswordSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const CreateAccountWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    return {
        auth,
        User,
        setUser,
        EmailAndPasswordSignIn,
        SignInWithGoogle,
        CreateAccountWithEmailAndPassword
    }
}

export default useFirebase;