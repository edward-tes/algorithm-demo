/**
 * 将一个n元一维向量向左旋转(即循环移位)i个位置。例如，当n=8且i=3时，向量abcdefgh旋转为defghabc。
 * 能否仅使用数十个额外字节的存储空间，在正比于n的时间内完成向量的旋转。
 *
 */
function main() {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
  //arr = reverse(arr, 0, 4);
  //arr = reverse(arr, 5, 8);
  //arr = reverse(arr, 0, 8);
  arr = archrobaticsReverse(arr, 9, 12);
  console.log(arr);
}

function reverse(arr, start, end) {
  let arr1 = arr.slice(start, end).reverse();
  for (let i = 0; i < arr1.length; i++) {
    arr[start + i] = arr1[i];
  }
  return arr;
}

/**
 * 杂技算法
 */
function archrobaticsReverse(arr, start, end) {
  let len = arr.length;
  let rotate = end - start;
  let count = maxCommonDivisor(len, rotate);
  for (let i = 0; i < count; i++) {
    let tmp = arr[i];
    let before = i;
    while (true) {
      next = (before + rotate) % len;
      if (next == i) {
        break;
      } else {
        arr[before] = arr[next];
        before = next;
      }
    }
    arr[before] = tmp;
  }
  return arr;
}
main();
/**
 * 辗转相除求最大公约数
 */
function maxCommonDivisor(x, y) {
  let max = x > y ? x : y,
    min = x > y ? y : x;
  if (min == 0) {
    return 0;
  }
  let remain = max % min;
  while (remain != 0) {
    max = min;
    min = remain;
    remain = max % min;
  }
  return min;
}
