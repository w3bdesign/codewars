function findMissingLetter(myarray) {
  let previous = [];
  for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    previous.push(element.charCodeAt());
    let test = element.charCodeAt();
    let missing = previous[index - 1];
    if (test - missing > 1) {
      return String.fromCharCode(previous[index] - 1);
    }
  }
}
