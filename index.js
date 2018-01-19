function produceDrivingRange(blockRange){
  return function(tripDistance) {
    let distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance < blockRange) {
      return `withing range by` + (blockRange - tripDistance);
    }
    else {
      return (distance - blockRange) + `blocks out of range`;
    }
  }
}
