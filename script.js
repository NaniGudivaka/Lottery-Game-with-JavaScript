const btnInput = document.querySelector('.prize-btn');
const resultInput = document.querySelector('.result');
const giftInput = document.querySelector('.gift');
const prizeInputs = document.querySelector('.btn-value');

const gifts = [
  '100 Cash',
  'Toy Car',
  'Chocolate Box',
  '500 Cash',
  'Smartphone Case',
  'Book',
  'Headphones',
  '50 Cash',
  'Gift Voucher',
  'Watch',
  'Teddy Bear',
  'Bluetooth Speaker',
  'MOvie Ticket',
  '200 Cash',
  'Puzzle Game',
  'Perfume',
  'Sunglasses',
  '1000 Cash',
  'Board Game',
  'Fitness Band',
  'Digital Clock',
  'Lamp',
  'Shopping Voucher',
  'Laptop Bag',
  'Wireless Mouse',
  'Travel Bag',
  'NOtebook Set',
  'Gaming Mousepad',
  '250 Cash',
  'Keychain',
  'Water Bottle',
  'Portable Charger',
  'Desk Organizer',
  'Cooking Set',
  'Action Figure',
  '300 Cash',
  'Travel Pillow',
  'Mini Backpack',
  'Personalized mug',
  'Gaming Controller',
  'Camera Drone ',
  'Toy Rocket',
  '750 Cash',
  'Sport Equipment',
  'Pen Set',
  'Bluetooth Earbuds',
  'Digital Photo Frames',
  'Walet',
  'Backpack',
  'Gift Hamper'
];

let prizeValues = '';

gifts.forEach(function(values, i){

   prizeValues = prizeValues + `<div class="box" id=${i + 1}>${i+1}. ${values}</div>`;
  
});
prizeInputs.innerHTML = prizeValues;

btnInput.addEventListener('click', () =>{
  for(let i = 1; i < 50; i++){

    document.getElementById(i).classList.remove('winningbox');
  }

  resultInput.textContent = 'Please wait results are calculating....'

  setTimeout(() =>{  
  let final = Math.floor(Math.random() * 50);
  final = final + 1;

  let winning = gifts[final - 1];

resultInput.textContent = `Your Lucky Number Is: ${final} and your winning prize is " ${winning.toUpperCase()} "`;

document.getElementById(final).classList.add('winningbox');

  },5000);

  



});
