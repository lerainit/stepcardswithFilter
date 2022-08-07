



 function getUrgency(){

   document.querySelector('.visit_select').addEventListener("change", function(){
                 
          let urgency

      if (document.querySelector('.visit_select').selectedIndex === 1){
         urgency = 'обычная'
      }else if(document.querySelector('.visit_select').selectedIndex === 2){
         urgency = 'приоритетная'
      }else{ urgency = 'неотложная'}
console.log(urgency)
         
      return urgency
  
       })
    }

   export default getUrgency