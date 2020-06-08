// IMPLEMENT THE BICYCLE CLASS BELOW...

class Vehicle {
    constructor (numberOfWheels, maxSpeed) {
      this.numberOfWheels = numberOfWheels
      this.maxSpeed = maxSpeed
      this.currentSpeed = 0
    }
  
    accelerate (amount=1) {
      if ((this.currentSpeed + amount) < this.maxSpeed) {
        this.currentSpeed += amount
      } else {
        this.currentSpeed = maxSpeed
      }
  
      return this.currentSpeed
    }
  
    decelerate (amount=1) {
      if ((this.currentSpeed - amount) > 0) {
        this.currentSpeed -= amount
      } else {
        this.currentSpeed = 0
      }
  
      return this.currentSpeed
    }
  }
  
  class Bicycle {
      // YOUR CODE HERE...
  }