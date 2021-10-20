
import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Forms/Houseform.js"
import { housesService } from "../Services/HousesService.js"


// pulls data from the proxy state aka app state and injects it into the template on the modle and puts it on the page when it first loads this is also a private function.

function _drawHouse(){
    const houses = ProxyState.houses
    let template = ''
    houses.forEach(house => template += house.Template)
    document.getElementById('listings').innerHTML = template
}




export class HousesController {
    // this is the actual spot where the page first loads.
    constructor() {
      ProxyState.on('houses', _drawHouse)
      
    }
//   this function grabs the data or values from the form provided on the page and pushes it to the service page. it also prevents the page from reloading upon submitting.
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
//   the form portion ends here
    // this little bit is a snippet from bootstrap that allows the form to reset to default on submit.   
      formElem.reset()
      
      bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
    }
//   this is a delete function that points to the service page.
    deleteHouse(id) {
      housesService.deleteHouse(id)
    }
//   this function is an onclick event if you will... then when you click houses on the page it will show the default houses with a button to add a new listing
//   the get house form is a template that is the layout of each card and the data in it comes from the model.
    showHouses() {
      _drawHouse()
      document.getElementById('form-button').classList.remove('visually-hidden')
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
      document.getElementById('form-button').title = 'upload house'
    }
  }