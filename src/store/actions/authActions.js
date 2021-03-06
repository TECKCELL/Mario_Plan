
export const signIn = (credentials) => {
    return (dispatch,state,{getFirebase})=>{

        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(

            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
   
}


export const signOut = ()=>{

    return(dispatch,state,{getFirebase})=>{

        const firebaseOut = getFirebase();
        firebaseOut.auth().signOut()
        .then(
            ()=>{
                dispatch(
                    {
                        type:'LOGOUT_SUCCESS'
                    }
                )
            }
        )
        .catch(
            (err)=>{
                dispatch(
                    {
                        type:'LOGOUT_ERROR',
                        err
                    }

                )

            }
        )


    }
}

export const signUp = (newUser) => {
    return (dispatch,state,{getFirebase,getFirestore})=>{

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(

            newUser.email,
            newUser.password
        ).then((resp)=>{
           
            return firestore.collection('users').doc(resp.user.uid).set({

                firstname:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err)=>dispatch({
            type:'SIGNUP_ERROR',err
        })
        )
    }
   
}