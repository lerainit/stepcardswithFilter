import Card from "./classes/card.js";

import createCard from "./classes/createcard.js";
import Login from "./classes/login.js";
import getUrgency from "./functions/getUrgency.js";
import createLogin from "./functions/createLogin.js";
import createCards from "./functions/createCards.js";
import renderCardsAfterReload from "./functions/renderCardsAfterReload.js";
import filterCards from "./functions/filterFuction.js";





const container = document.querySelector('.container')



const loginBtn = document.querySelector('.login_btn')

loginBtn.addEventListener('click', createLogin)


//new Card('Иван Иванов','терапевт','обследование','боль в желудке','срочно').render('.container')

const urgencySelect = document.querySelector('.visit_select')



if(localStorage.getItem('token')){

  const logOutBtn = document.createElement('button')
  logOutBtn.innerHTML = 'Выйти'
  logOutBtn.classList.add('logout_btn')
  const header = document.querySelector('header')
  header.append(logOutBtn)

 logOutBtn.addEventListener('click',() =>{

  

  localStorage.clear()
  document.location.reload()
 
})


    renderCardsAfterReload()
}
 

