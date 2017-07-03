
function findUniq(arr) {
  let newArr = arr.slice();
  for(let i = 0; i < newArr.length; i++) {
    newArr[i] = new Set(newArr[i].toLowerCase().split("").sort());
    newArr[i] = [...newArr[i]].join("");
  }
  for(let i = 0; i < newArr.length; i++) {
    if(newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) {
      return arr[i];
    }
  }
}


console.log(findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]));
