import Card from "../classes/card.js"

const filterCards = () =>{
let target = event.target

const cardsForFilter = JSON.parse(localStorage.getItem('cards'))

console.log( typeof  +target.value)



const filteredCards =cardsForFilter.filter(el  =>el.doctor === target.value || el.age === target.value || el.name === target.value || el.description === target.value || el.urgency === +target.value)
console.log(filteredCards)
filteredCards.forEach(el =>     new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container'))

}

export default  filterCards;