let store = {drivers: [], passengers: [] }
let driverId = 0 

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    
    
    store.drivers.push(this)
  }
}

let passengerId = 0

class Passenger{
  constructor(name){
    
  }
}