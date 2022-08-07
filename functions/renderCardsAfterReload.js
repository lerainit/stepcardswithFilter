
import Card from "../classes/card.js"
import createLogin from "./createLogin.js"
import createCards from "./createCards.js"
import Filter from "../classes/filter.js"


function renderCardsAfterReload(){
    let cardsArr = JSON.parse(localStorage.getItem('cards'))
    
    console.log(cardsArr)

    
      
     cardsArr.forEach(el =>{
    
      
      
         new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
      })

  const loginBtn = document.querySelector('.login_btn')
    loginBtn.innerHTML = 'Cоздать новую карту'
      loginBtn.removeEventListener('click',createLogin)

     loginBtn.addEventListener('click',createCards)

     const filter = new Filter()
     filter.render('.filter_container2')
    
    if(localStorage.getItem('newcard')){

     
    }
    
    }

    export default renderCardsAfterReload