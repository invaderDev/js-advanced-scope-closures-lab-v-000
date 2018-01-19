function produceDrivingRange(blockRange){
  return function(start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance < blockRange) {
      return `withing range by` + (blockRange - tripDistance);
    }
    else {
      return (distance - blockRange) + `blocks out of range`;
    }
  }
}
