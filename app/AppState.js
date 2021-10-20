import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]
  /** @type {House[]} */
  // this is the instance of 3 different houses that get put on the page when you click houses .
  houses = [
    new House({lotsize: 10000, builder: 'quinn homes', year: 2020, price: 250000, type: 'bungalow', description: 'has a great view from the back deck', imgUrl: 'https://media.istockphoto.com/photos/exterior-of-small-american-house-with-blue-paint-picture-id589538090?k=20&m=589538090&s=612x612&w=0&h=5obd9GWPEDn4AzSe7TYlBeLbGKtzOol-xPf0nL474eY='}),
    new House({ lotsize: 7500, builder: 'kody homes', year: 2018, price: 300000, type: 'craftsman', description: 'this is a beautiful water front property', imgUrl: 'https://media.istockphoto.com/photos/generic-home-for-sale-picture-id187062976?k=20&m=187062976&s=612x612&w=0&h=mVZQSwEODaaVX73laMc4T0ZFlIVmxumQvZKglVIMHT8=' }),
    new House({lotsize: 200000, builder:'william homes', year: 2008, price: 199000, type: 'tiny home', description: 'perfect dark green lawn!!', imgUrl: 'https://media.istockphoto.com/photos/american-craftsman-house-picture-id178559422?k=20&m=178559422&s=612x612&w=0&h=EXdN4TKEqcnCfei4ynpbAT49hg8Nc--vvN6oEIThU_0='})
  ]
}
//  this is magic...
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
