(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{221:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var c=n(14),r=n(1),a=n(2),i=n.n(a),s=n(94),o=n.n(s),l=(n(221),n(29)),j=n(30),d=n(32),h=n(31),u=n(11),b=n(7),O=n(10),p=Object(O.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"LOGOUT_SUCCESS"})})).catch((function(t){e({type:"LOGOUT_ERROR",err:t})}))}))}}}))((function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.c,{to:"/create",children:"New project"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(r.jsx)("li",{children:Object(r.jsx)(u.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})})]})})})),m=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.c,{to:"/SignUp",children:"Signed up"})}),Object(r.jsx)("li",{children:Object(r.jsx)(u.c,{to:"/SignIn",children:"Log in"})})]})})},f=Object(O.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,c=t.uid?Object(r.jsx)(p,{profile:n}):Object(r.jsx)(m,{});return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"nav wrapper grey darken-3",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(u.b,{to:"/",className:"brand-logo",children:"MarioPlan"}),c]})})})})),x=n(55),g=n.n(x),v=function(e){var t=e.notifications;return Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"card z-depth-0",children:Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:"Notifications"}),Object(r.jsx)("ul",{className:"notification",children:t&&t.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"pink-test",children:e.user}),Object(r.jsxs)("span",{children:[" ",e.content," "]}),Object(r.jsx)("div",{className:"grey-text note-date",children:g()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})},N=function(e){var t=e.project;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(r.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(r.jsx)("span",{className:"card-title",children:t.title}),Object(r.jsxs)("p",{children:["Posted by: ",t.authorLastname," ",t.authorFirstname]}),Object(r.jsxs)("div",{children:["Date: ",g()(t.createdAt.toDate()).calendar()]}),Object(r.jsx)("p",{className:"grey-text"})]})})})},y=function(e){var t=e.projects;return Object(r.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(r.jsx)(u.b,{to:"/project/"+e.id,children:Object(r.jsx)(N,{project:e},e.id)})}))})},C=n(24),S=n(22),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.projects,n=e.auth,c=e.notifications;return n.uid?Object(r.jsx)("div",{className:"dashboard container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsx)(y,{projects:t})}),Object(r.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(r.jsx)(v,{notifications:c})})]})}):Object(r.jsx)(b.a,{to:"/signin"})}}]),n}(a.Component),F=Object(S.d)(Object(O.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(E),w=Object(S.d)(Object(O.b)((function(e,t){var n=t.match.params.id,c=e.firestore.data.projects;return{project:c?c[n]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(r.jsx)("div",{className:"container section project-details",children:Object(r.jsxs)("div",{className:"card z-depth-o",children:[Object(r.jsxs)("div",{className:"card content",children:[Object(r.jsx)("span",{className:"card-title",children:t.title}),Object(r.jsx)("p",{children:t.content})]}),Object(r.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(r.jsxs)("div",{children:["Posted by:",t.authorLastname," ",t.authorFirstname]}),Object(r.jsxs)("div",{children:["Date: ",g()(t.createdAt.toDate()).calendar()]})]})]})}):Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("p",{children:"Loading project ...."})}):Object(r.jsx)(b.a,{to:"/signin"})})),R=n(36),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(r.jsx)(b.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{className:"grey-text grey-darken-3",children:"Sign In"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"email",id:"email"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"password",id:"password"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn pink darken-1 z-depth-0",children:"Login"}),Object(r.jsx)("div",{className:"red-text-center",children:t?Object(r.jsx)("p",{children:t}):null})]})]})})}}]),n}(a.Component),P=Object(O.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,c){(0,c.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(I),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(r.jsx)(b.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{className:"grey-text grey-darken-3",children:"Sign Up"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"email",id:"email"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"password",id:"password"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"firstname",children:"Last name"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"text",id:"firstName"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"lastname",children:"First name"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"text",id:"lastName"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn pink darken-1 z-depth-0",children:"Sign Up"}),Object(r.jsx)("div",{className:"red-text-center",children:n?Object(r.jsx)("p",{children:n}):null})]})]})})}}]),n}(a.Component),U=Object(O.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,c){var r=c.getFirebase,a=c.getFirestore,i=r(),s=a();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstname:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){return t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(k),L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(j.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{className:"grey-text grey-darken-3",children:"Create new project"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"title",children:"title"}),Object(r.jsx)("input",{onChange:this.handleChange,type:"text",id:"title"})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"content",children:"Content Project"}),Object(r.jsx)("textarea",{onChange:this.handleChange,id:"content",className:"materialize-textarea"})]}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("button",{className:"btn pink darken-1 z-depth-0",children:"Create"})})]})}):Object(r.jsx)(b.a,{to:"/signin"})}}]),n}(a.Component),D=Object(O.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth}}),(function(e){return{createProject:function(t){e(function(e){return function(t,n,r){r.getFirebase;var a=r.getFirestore,i=n().firebase.profile,s=n().firebase.auth.uid;a().collection("projects").add(Object(c.a)(Object(c.a)({},e),{},{authorFirstname:i.firstname,authorLastname:i.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"ADD_PROJECT",project:e})})).catch((function(n){t({type:"ADD_PROJECT_ERROR",project:e})}))}}(t))}}}))(L),_=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{exact:!0,path:"/",component:F}),Object(r.jsx)(b.b,{path:"/project/:id",component:w}),Object(r.jsx)(b.b,{path:"/SignIn",component:P}),Object(r.jsx)(b.b,{path:"/SignUp",component:U}),Object(r.jsx)(b.b,{path:"/Create",component:D})]})]})})}}]),n}(a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,409)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},G={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(c.a)(Object(c.a)({},e),{},{authError:"login error"});case"LOGIN_SUCCESS":return console.log("login success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"LOGOUT_SUCCESS":return console.log("log out success"),e;case"LOGOUT_ERROR":return{};case"SIGNUP_SUCESS":return console.log("signup success"),Object(c.a)(Object(c.a)({},e),{},{autherror:null});case"SIGNUP_ERROR":return console.log("signup err",t.err.message),Object(c.a)(Object(c.a)({},e),{},{autherror:t.err.message});default:return e}},z={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROJECT":return console.log("action project:",t.project),e;case"ADD_PROJECT_ERROR":return console.log("action error",t.err),e;default:return e}},J=n(56),W=Object(S.c)({auth:T,project:B,firestore:J.firestoreReducer,firebase:C.firebaseReducer}),M=n(215),K=n(57);n(408),n(405);K.a.initializeApp({apiKey:"AIzaSyC2W0V2y1f07w5iTnFeejnBEQFv6YFEi0U",authDomain:"marioplan-fe7df.firebaseapp.com",projectId:"marioplan-fe7df",storageBucket:"marioplan-fe7df.appspot.com",messagingSenderId:"22424682461",appId:"1:22424682461:web:435b9b033a6860a3950034"}),K.a.firestore().settings({timestampsInSnapShots:!0});var Q=K.a,V=Object(S.e)(W,Object(S.d)(Object(S.a)(M.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(Q))),Y={firebase:K.a,config:{userProfile:"users",useFirestoreForProfile:!0,updateProfileOnLogin:!1},fb:Q,dispatch:V.dispatch,createFirestoreInstance:J.createFirestoreInstance};function q(e){var t=e.children,n=Object(O.c)((function(e){return e.firebase.auth}));return Object(C.isLoaded)(n)?t:Object(r.jsx)("div",{children:"splash screen..."})}o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(O.a,{store:V,children:Object(r.jsx)(C.ReactReduxFirebaseProvider,Object(c.a)(Object(c.a)({},Y),{},{children:Object(r.jsx)(q,{children:Object(r.jsx)(_,{})})}))})}),document.getElementById("root")),A()}},[[407,1,2]]]);
//# sourceMappingURL=main.3a0cf450.chunk.js.map