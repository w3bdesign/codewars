function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(c => (c >= "a") & (c <= "z")) // filter all letters from a to z
    .map(c => c.charCodeAt(0) - "a".charCodeAt(0) + 1) // (abc) = 123
    .join(" ");
}

console.log(alphabetPosition("abc"));
