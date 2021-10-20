import { CarsController } from "./Controllers/CarsController.js"
import { HousesController } from "./Controllers/HousesController.js"
// the houses controller is passed through here to then go on to the html page
class App {
  carsController = new CarsController()
  housesController = new HousesController()
}

window["app"] = new App()
