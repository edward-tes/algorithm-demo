/**
 * 输入描述：
 * > 第一行输入一个正整数n （n <= 1000）,表示数字序列的元素个数，占一行；接下来一行输入从1到n的n个整数排序，中间用空格隔开
 * 
 * 输出描述
 * > 输出序列升序排列需要的最少交换次数
 * 
 * 输入例子：
 * > 4
 * 4 3 2 1
 * 
 * 输出列子：
 * > 6
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

startQuestion();
rl.on('line', (input) => {
  if (input != 'EOF') {
    startQuestion();
    rl.resume();
  } else {
    rl.close();
  }
});

function startQuestion  () {
  rl.question('Input Array Num > ', function(num) {
    rl.question('Input Array > ', function(arrStr) {
      const arr = arrStr.split(' ')
    console.log(`The number of exchanges: ${getSortCount(arr)}`);
    });
  })
}

function getSortCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return count;
}

