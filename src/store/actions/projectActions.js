export const createProject = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        //Async call to database
        const firestore = getFirestore();
        firestore.collection("projects").add({
            ...project,
            authorFirstname:profile.firstname,
            authorLastname:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{

            dispatch({type:'ADD_PROJECT',project:project})
        }).catch((error)=>{

            dispatch({type:'ADD_PROJECT_ERROR',project:project})
        })
      
    }

}
