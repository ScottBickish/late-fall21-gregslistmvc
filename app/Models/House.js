import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(data) {
    // this in other words is what a 'house' should look like. plus this is where the random id is assigned. 
    this.id = generateId()
    this.lotsize = data.lotsize
    this.builder = data.builder
    this.year = data.year
    this.price = data.price
    this.type = data.type
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
//  this is the actual html of how the card look after you submit the post. its a template
  get Template() {
    return `
    <div class="col-md-3 mt-3">
      <div class="bg-light elevation-1 rounded">
        <img width="100%" class="house-img rounded-top" src="${this.imgUrl}" alt="house image">
        <div class="p-3">
          <p><b>${this.lotsize} - ${this.builder} - ${this.year}</b></p>
          <p>${this.description}</p>
          <div class="d-flex align-items-center">
            <div   class=" mx-2"><p><b>${this.type}</b></p></div>
            <p class="m-0"><em>$${this.price}</em></p>
            </div>
            <div class="text-end">
            <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
            </div>
        </div>
      </div>
    </div>
    `
  }
}

