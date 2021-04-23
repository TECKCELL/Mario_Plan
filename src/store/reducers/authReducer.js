const initState={
    authError:null
}
const authReducer = (state = initState,action)=>{

    
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'login error'
            }
        case 'LOGIN_SUCCESS':  
        console.log('login success')
        return {
            ...state,
            authError:null
        }
        case 'LOGOUT_SUCCESS':
            console.log('log out success')
            return state;
        case 'LOGOUT_ERROR':
            return {

            }
        case 'SIGNUP_SUCESS':
            console.log('signup success')
            return{
                ...state,
                autherror:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup err',action.err.message)
            return{
                ...state,
                autherror:action.err.message
            }
        default:
            return state;
    }

}
export default authReducer