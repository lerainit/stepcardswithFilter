
import getCards from "../functions/getCards.js";
import instance from "../functions/instance.js";


class Card{
constructor(id,name,doctor,purpose,description,urgency){
this._purpose = purpose;
this._id = id
this._description = description;
this._urgency = urgency;
this._name = name;
this.doctor = doctor;
this.cardContainer = document.createElement('div')
this.showMoreBtn = document.createElement('button')
this.deleteBtn = document.createElement('button')
this.editBtn = document.createElement('button')

}
createElements(){
this.cardContainer.classList.add('card_container')
this.showMoreBtn.classList.add('show_btn')
this.deleteBtn.classList.add('delete_btn')
this.editBtn.classList.add('edit_btn')
this.showMoreBtn.innerHTML ='Показать больше'
this.deleteBtn.innerHTML = 'Удалить'
this.editBtn.innerHTML = 'Редактировать'
this.cardContainer.append(this.deleteBtn)
this.cardContainer.append(this.editBtn)
this.cardContainer.insertAdjacentHTML('beforeend',`
<ul>
<li>ФИО:${this._name}</li>
<li>Доктор:${this.doctor}</li>
</ul>
`)

this.cardContainer.append(this.showMoreBtn)


this.showMoreBtn.addEventListener('click',()=>{

const showMore = document.querySelector('.show_more')
if(showMore){showMore.remove()}

    this.cardContainer.insertAdjacentHTML('beforeend',`
    <ul class = "show_more">
<li>Цель визита:${this._purpose}</li>
<li>Краткое описание визита:${this._description}</li>
<li>Срочность:${this._urgency}</li>

</ul>
    `)

})
this.deleteBtn.addEventListener('click',()=>{
    console.log(this._id)

   const deleteCard = async ()=>{
        const result = await instance.delete(`/${this._id}`)
        console.log(result)
    }
    deleteCard()

  this.cardContainer.remove()  
})
}
render(selector){
this.createElements()


document.querySelector(selector).append(this.cardContainer)
//document.querySelector('h1').innerHTML = ''
}
    
}





export default Card;
