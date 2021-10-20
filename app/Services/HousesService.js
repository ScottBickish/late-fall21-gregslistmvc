import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HousesService {
    deleteHouse(id) {
    //   this function will delete the house form that has a matching id so you delete the actual house you click on.
      ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
    }
    createHouse(HouseData) {
      const house = new House(HouseData)
      ProxyState.houses = [...ProxyState.houses, house]
    }
  
  }
  
  
  export const housesService = new HousesService()