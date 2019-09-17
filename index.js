let store = {items: []}

class Driver {
  constructor(name){
    this.name = name
    
    store.drivers.push(this)
  }
}