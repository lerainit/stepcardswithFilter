import getCards from "./getCards.js";
import Card from "../classes/card.js";
import Filter from "../classes/filter.js";
import filterCards from "./filterFuction.js";


const renderCards = ( )=>{
 const result = async () =>{

 const data = await getCards()



   return data
 }
  let cardsArr = result()


//console.log(cardsArr)

 cardsArr.then(result =>{ console.log(result)

if(result === []){
  const titleForBegin =document.createElement('h1')
  document.querySelector('.container').append( titleForBegin)
  document.querySelector('h1').innerHTML = 'There is no items added'
}

result.forEach(el =>{

    if(el.doctor === 'cardiologist'){
       new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
    }})




  })

  const filter = new Filter()
  filter.render('.filter_container2')
  document.querySelector('.filter_container2').addEventListener('input',()=>{
    const container = document.querySelector('.container')
  container.innerHTML = ''
  filterCards()
  
  })

  return cardsArr
}
export default renderCards
