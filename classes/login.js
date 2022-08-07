
import Modal from "./modal.js";
import instance from "../functions/instance.js";
import getCards from "../functions/getCards.js";
import renderCards from "../functions/renderCards.js";
import createLogin from "../functions/createLogin.js";
import createCards from "../functions/createCards.js";
import Card from "./card.js";


class Login extends Modal{
    constructor(){
     super()   
     this.emailInput = document.createElement('input')
     this.emailInputLabel = document.createElement('label')
     this.passwordInput = document.createElement('input')
     this.passwordInputLabel = document.createElement('label')
     this._submitButton = document.createElement('input')
     this.form = document.createElement('form')
    }
    createElements(){
        super.createElements()
        this.passwordInput.type = 'text'
        this.emailInput.type = 'text'
        this.passwordInput.id = 'password'
        this.emailInput.id = 'email'
        this.passwordInputLabel.for = 'password'
        this.emailInputLabel.innerHTML='Email'
        this.emailInputLabel.for = 'email'
        this.passwordInputLabel.innerHTML='Password'
        this._submitButton.type = 'submit'
        this._submitButton.value = 'Submit'
        this._mainContainer.append(this.form)
       this.form.append(this.emailInputLabel)
        this.form.append(this.emailInput)
       this.form.append(this.passwordInputLabel)
       this.form.append(this.passwordInput)
       this.form.append(this._submitButton)

    }
    submitLogin() {
        this.form.addEventListener('submit', (event) => {

            event.preventDefault()

            //localStorage.clear()

            const input = document.querySelectorAll('input')

            console.log(input[0].value)
            console.log(input[1].value)



            const login = async () =>{
             const {status,data} =  await instance.post('/login',{email:input[0].value,password:input[1].value})
                console.log(data)
              localStorage.setItem('token',data)
                  renderCards()  
            }

          login()


           /* fetch("https://ajax.test-danit.com/api/v2/cards/login", {
                method: 'POST',
                 headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                 
                    email: input[0].value,
                   password: input[1].value,
                }),
               
            })
                .then(response => response.text())
                .then(token =>{ console.log(token)
                localStorage.setItem('token',token)
                }
                )*/
         
      
           this.closeModal()
          const loginBtn = document.querySelector('.login_btn')

          loginBtn.innerHTML = 'Cоздать новую карту'
          loginBtn.removeEventListener('click',createLogin)

         loginBtn.addEventListener('click',createCards)
         const logOutBtn = document.createElement('button')
         logOutBtn.innerHTML = 'Выйти'
         logOutBtn.classList.add('logout_btn')
         const header = document.querySelector('header')
         header.append(logOutBtn)
       
        logOutBtn.addEventListener('click',() =>{
       
         
       
         localStorage.clear()
         document.location.reload()
        
       })
             
         
        })


    }
    render(selector){
        this.createElements();
    
        document.querySelector(selector).append(this._modalElement);
    }

}

export default Login;