const converterInt = (e) => parseInt(e);
const tripleDoubleQuadruple = (e) => ((e * 3) * 2) * 4;

max = 100;
min = 0;

function getRandomInt() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = [getRandomInt(), getRandomInt(), getRandomInt(),
           getRandomInt(), getRandomInt(), getRandomInt()].map(tripleDoubleQuadruple);

console.log(num);