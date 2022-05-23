const deck = ['aceOfSpade', 'aceOfDiamond', 'aceOfClover', 'aceOfHeart', 'kingOfSpade', 'kingOfDiamond', 'kingOfClover', 'kingOfHeart'];
let random = Math.floor((Math.random() * 8));

const player = [];

deck.splice(1, 1);

let coeficient = 8;



while (deck.length > 0) {
  let random = Math.floor((Math.random() * coeficient));

  // player.push(deck[random]);
  // deck.splice(random, 1);
  console.log(random);
  coeficient--;
  if (coeficient == -1) break;
}

console.log(deck);
console.log(player);