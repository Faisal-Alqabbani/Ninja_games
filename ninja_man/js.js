const newArray = [];
let arraytwo = [];
for (i = 0; i <= 5; i++) {
  for (j = 0; j <= 10; j++) {
    if (i === 0) {
      arraytwo.push(1);
    } else if (j === 0 || j === 10) {
      arraytwo.push(1);
    } else {
      arraytwo.push(getRandomInt(3));
    }
  }
  newArray.push(arraytwo);
  arraytwo = [];
}
console.log(newArray);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
