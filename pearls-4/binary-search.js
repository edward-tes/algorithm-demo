function main() {
  const x = [1, 2, 3, 4, 5, 6]
  const t = 2;
  const n = x.length;
  mustbe(0, n - 1);
  let l = 0;
  let u = n - 1;
  mustbe(l, u);
  let P = null;
  while (true) {
    mustbe(l, u);
    if (l > u) {
      mustbe(l, u)
      p = -1;
      console.log('T is not in the array')
      break;
    }
    mustbe(l, u);
    m = ~~((l + u) / 2);
    mustbe(l, u) && console.assert(l <= m <= u);
    if (x[m] < t) {
      l = m + 1;
    } else if (x[m] == t) {
      P = m;
      break;
    } else if (x[m] > t) {
      u = m - 1;
    }
  }
  console.log(P);

  function mustbe(l, u) {
    let newArr = x.slice(l, u);
    console.assert(newArr.indexOf(t) >= -1);
    return newArr.indexOf(t)
  }
}
main();
