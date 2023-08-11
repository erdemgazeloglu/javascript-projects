function findOutlier(integers){
  console.log(integers);
  let reverse = integers.slice().reverse();
  for (let i = 0; i <= integers.length; i++) {
    if (Math.abs(integers[0]%2) !== Math.abs(reverse[i]%2)) {
      if(Math.abs(integers[0]%2) !== Math.abs(reverse[i+1]%2)){
        return integers[0];
      } else {
        return reverse[i];
      }
    }
    
  }
}
