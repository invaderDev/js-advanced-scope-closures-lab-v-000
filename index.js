function produceDrivingRange(blockRange){
  return function(tripDistance) {
    tripDistance < blockRange ? true : false;
  }
}