const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello MC!");
 });

 const createNotification = (notification=>{

    return  admin.firestore().collection('notifications').add(notification)
    .then(doc =>{console.log('notification create',doc)})
       
    
 })

 exports.projectCreated = functions.firestore.document('projects/{projectId}')
 .onCreate((doc)=>{
    
    const project = doc.data();
    const notification = {

        content:'Added a new project',
        user:`${project.authorFirstname} ${project.authorLastname}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)

 }) ;

 exports.userJoined = functions.auth.user()
 .onCreate((user)=>{

    return admin.firestore().collection('users').doc(user.uid)
    .get().then(doc =>{

        const newUser = doc.data();
        const notification = {

            content : 'joined the party',
            user:`${newUser.firstname} ${newUser.lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()

        }

        return createNotification(notification)

    })

 })