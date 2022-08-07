import Login from "../classes/login.js"


function createLogin(){


    const login = new Login()
 
 login.render('.container')
 
 login.submitLogin() 

 }
 

 export default createLogin