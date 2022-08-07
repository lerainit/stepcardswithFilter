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
result.forEach(el =>{

    if(el.doctor === 'cardiologist'){
       new Card(el.id,el.name,el.doctor,el.purpose,el.description,el.urgency).render('.container')
    }})




  })

  const filter = new Filter()
  filter.render('.filter_container2')
  document.querySelector('.filter_container2').addEventListener('input',()=>{
  
  filterCards()
  
  })

  return cardsArr
}
export default renderCards
