function produceDrivingRange(blockRange){
  return function(start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance < blockRange) {
      return `within range by ` + (blockRange - distance);
    }
    else {
      return (distance - blockRange) + ` blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercentage){
  return function(fare){
    return fare * tipPercentage;
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(){
      this.id = ++driverId;
    }
  }
}