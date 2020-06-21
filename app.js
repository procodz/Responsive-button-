const btn = document.querySelector('a');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function colorChanger() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}  