import Visit from "./visit.js";

class VisitDentist extends Visit{
    constructor(){
        super()
      this.submitBtn = document.createElement('button') 
    }
    createElements(){
        super.createElements()
       this.submitBtn.innerHTML = 'Создать визит';
       this.submitBtn.classList.add('btn_for_dentist')
       this.form.insertAdjacentHTML('beforeend',`
       <label for="lastvisit">Дата последнего посещения</label><br>
       <input id ="lastvisit" type ="text" value=""><br>
      
       `)
    this.form.append(this.submitBtn)
    this.submitBtn.addEventListener('click',()=>{


        
    })
    }


    render(selector){
        this.createElements()
        document.querySelector(selector).append(this.form);
    }
    
    }
    
    export default VisitDentist;