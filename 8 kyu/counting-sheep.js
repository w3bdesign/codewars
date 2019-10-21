function countSheeps(arrayOfSheep) {
  let countSheep = 0;

  arrayOfSheep.map(baah => {
    if (baah) {
      countSheep++;
    }
  });
  return countSheep;
}
