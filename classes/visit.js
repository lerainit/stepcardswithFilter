import Modal from "./modal.js";


class Visit extends Modal{

  constructor(){
    super()
      this.form = document.createElement('form')
      this.submitBtn = document.createElement('input')
      this._submitButton = document.createElement('input')
   

  }
  createElements(){
    super.createElements()
      this.form.classList.add('submit_form')
     
this.submitBtn.type = 'submit'

this._submitButton.type = 'submit'

this._submitButton.value = 'Подтвердить';
this._mainContainer.append(this.form)  

this.form.insertAdjacentHTML('beforeend',`<label for="title">Цель визита</label><br> 
      <input type="text" id="title" value=""><br>
      <label for="text">Краткое описание визита</label><br>
       <input type="text"  value=""><br>
     <select class = "visit_select" size = "2"> <option disabled>Cрочность визита</option>
     <option value="">обычная</option>
    <option value="">приортетная</option>
    <option value="">неотложная</option></select><br>
      <label for="text">ФИО</label> <br>
      <input type="text"  value=""><br>`)
 
  }




  
render(selector){
  this.createElements();
  
  document.querySelector(selector).append(this.form);
}
}

export default Visit;

