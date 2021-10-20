
import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js"




function _drawHouse(){
    const houses = ProxyState.houses
    let template = ''
    houses.forEach(house => template += house.Template)
    document.getElementById('listings').innerHTML = template
}




export class HousesController {
    constructor() {
      ProxyState.on('houses', _drawHouse)
      
    }
  
    createHouse() {
      window.event.preventDefault()
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const houseData = {
        lotsize: formElem.lotsize.value,
        builder: formElem.builder.value,
        year: formElem.year.value,
        price: formElem.price.value,
        type: formElem.type.value,
        description: formElem.description.value,
        imgUrl: formElem.imgUrl.value
      }
  
      housesService.createHouse(houseData)
  
      
      formElem.reset()
      
      bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
    }
  
    deleteHouse(id) {
      housesService.deleteHouse(id)
    }
  
    showHouses() {
      _drawHouse()
      document.getElementById('form-button').classList.remove('visually-hidden')
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }
  }