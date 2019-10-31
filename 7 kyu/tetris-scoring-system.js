function getScore(arr) {
  let l = 0,
    score = 0;
  for (let x of arr) {
    score += [0, 40, 100, 300, 1200][x] * ((l / 10 + 1) | 0);
    l += x;
  }
  return score;
}
