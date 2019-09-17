let store = {drivers: [], passengers: [], trips: [] }
let driverId = 1 

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(return store.trips.filter(trip => trip.driverId === this.id));
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
  constructor(driver,passenger){
  this.id = ++tripId  
  this.driverId = driverId;
  this.passengerId = passengerId;
 store.trips.push(this)
 }
  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }
  
  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }
 
}

