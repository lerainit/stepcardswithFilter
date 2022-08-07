
import Card from "../classes/card.js"
import instance from "./instance.js"

 const getCards = async () =>{
 const {status,data} = await instance.get('')

 localStorage.setItem('cards', JSON.stringify(data))


return data


}



 export default getCards;