
import getUrgency from "../functions/getUrgency.js"
import Modal from "./modal.js"
import VisitCardiologist from "./visitCardiologist.js"
import VisitDentist from "./visitDentist.js"
import VisitTherapist from "./visitTherapist.js"

 export class createCard extends Modal{
  constructor(){
  super()
  
  this._submitButton = document.createElement('input')
  this.select = document.createElement('select')
 
 }
  
  createElements(){
  super.createElements()
  this._submitButton.type = 'submit'
  this.select.size = 3;
  this._submitButton.value = 'Подтвердить';
   
  this._mainContainer.append(this.select)
  this.select.insertAdjacentHTML('beforeend',`
  <option disabled>Выберите доктора</option>
  <option value="">Терапевт</option>
  <option value="">Стоматолог</option>
  <option value="">Кардиолог</option>
  `)
  this.select.addEventListener("change", function(){
                 
      const formType = this.options[this.selectedIndex].text;
         
        const submitForm = document.querySelector('.submit_form')
       if(submitForm){
           submitForm.remove()
       }
       if(formType === 'Кардиолог'){
     new VisitCardiologist().render('.modal__main-container')
    //getUrgency() 
  }
     else if(formType === 'Терапевт'){ new VisitTherapist().render('.modal__main-container')}
     else{ new VisitDentist().render('.modal__main-container')}
  
       });
  }
  render(selector){
      this.createElements();
      
              document.querySelector(selector).append(this._modalElement);
  }
  
  }
  
export  default createCard
  


