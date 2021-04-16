function shuffleArray(arr){
  for(let i = arr.length; i>0; i++){
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr;
}
