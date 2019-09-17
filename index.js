let store = {drivers: [], passengers: [], trips: [] }
let driverId = 1 

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    
    
    store.drivers.push(this)
  }
}

let passengerId = 1

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name 
    
    store.passengers.push(this)
  }
}

let tripId = 1
class Trip {
  constructor(driverId,passengerId){
  this.id = ++tripId  
  this.driverId = driverId;
  this.passengerId = passengerId;
  if (driver){
    this.driverId = driver.id;
 }
  
  store.trips.push(this)
}
setDriver(driver) {
  this.driverId = driver.id;
}
  
}