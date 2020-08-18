const balls = document.querySelectorAll('.ball');
const btn_start = document.querySelector('.btn_start');

btn_start.addEventListener('click', lottoNum)

function lottoNum(){
  let lotto = [];
  for(let i=0; i<100; i++){
    let n = Math.floor(Math.random() * 45) +1;
    if(lotto.indexOf(n) == -1){
      lotto.push(n);
      if(lotto.length == 6){
        break
      }
    }
  }
  
  lotto = lotto.sort((a, b) => { return a - b });
  
  for(let i=0; i<100; i++){
    let bonusNum = Math.floor(Math.random() * 45) +1;
    if(lotto.indexOf(bonusNum) == -1){
      lotto.push(bonusNum)
      break
    }
  }

  balls.forEach((ball, i) => {
  ball.innerHTML = lotto[i]

  ball.classList.remove(...ball.classList);
  ball.classList.add('ball');
  const num = Number(ball.textContent)
  if(num > 40){ball.classList.add('ball5')}
  else if (num > 30){ball.classList.add('ball4')}
  else if (num > 20){ball.classList.add('ball3')}
  else if (num > 10){ball.classList.add('ball2')}
  else {ball.classList.add('ball1')}
  })
}