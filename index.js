const betClick = () => {

  const account = document.querySelector('#acc');
  const bet = document.querySelector('#bet'); 
  const button = document.querySelector('#button')

  button.className = "butt";
  // const side = document.querySelector('#dice');
  }




  const diceClick = () => {
    const side = document.querySelector('#dice');
    const random = Math.round(Math.random() * (6-1) + 1);
    const account = document.querySelector('#acc');
    const bet = document.querySelector('#bet'); 


    if (random === 1) {
      side.className = 'side1'
      account.value = account.value - Number(bet.value);
    } else if (random === 2) {
      side.className ='side2';
      account.value = account.value - Number(bet.value);
    } else if (random === 3) {
      side.className='side3';
      account.value = account.value - Number(bet.value);
    } else if (random === 4) {
      side.className='side4';
      account.value = account.value - Number(bet.value);
    } else if (random === 5) {
      side.className='side5';
      account.value = account.value - Number(bet.value);
    } else if (random === 6) {
      side.className='side6'
      account.value = 6 * Number(bet.value);;  
    } 
}








  




