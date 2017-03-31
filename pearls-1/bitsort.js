var fs = require('fs');

function main() {
  var num = 1000000;
  var col = [];
  // Generate random arr
  var arr = bigRand(num)
  let startTime = Date.now();
  arr.sort();
  console.log((Date.now() - startTime) / 1000);
}

function bitSort(arr) {
  let col = [];
  let num = arr.length;
  for (var i = 0; i < num; i++) {
    col[i] = 0;
  }

  for (item in arr) {
    col[arr[item]] = 1;
  }
  let resArr = [];
  for (var i = 0; i < num; i++) {
    if (col[i] == 1) {
      resArr.push(i);
    }
  }
  return resArr;
}

function bigRand(num) {
  let resArr = [];
  for (let i = 0; i < num; i++) {
    resArr.push(i);
  }
  for (let i = 0; i < resArr.length; i++) {
    swapNum(resArr, randomNum(num - 1), randomNum(num - 1));
  }
  return resArr;
}

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function swapNum(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}
main()
