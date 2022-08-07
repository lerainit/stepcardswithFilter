class Filter {

    constructor(){
    
    
    this.filterContainer = document.createElement('div')
    this.filterForm = document.createElement('form')
    
    
    }
    
    createElements(){
    this.filterContainer.classList.add('filter_container')
    
    this.filterForm.classList.add('filter_form')
    this.filterForm.insertAdjacentHTML('beforeend','<label for="filter">Поиск</label><input id ="filter" type ="text" value ="">')
    
    this.filterContainer.append(this.filterForm)
    
    }
    render(selector){
    
    this.createElements()
    document.querySelector(selector).append(this.filterContainer)
    
    
    }
    
    
    }
    export default Filter