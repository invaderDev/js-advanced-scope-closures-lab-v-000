function produceDrivingRange(blockRange){
  return function(tripDistance) {
    if (tripDistance < blockRange) {
      return `withing range by` + (blockRange - tripDistance);
    }
    else {
      return (tripDistance - blockRange) + `blocks out of range`;
    }
  }
}
