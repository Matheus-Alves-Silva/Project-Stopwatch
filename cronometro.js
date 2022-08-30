/* definindo valor de hora, minuto, segundo, milissegundo para zero*/
'use strict'
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timerRef = document.querySelector('.timerDisplay')
console.log(timerRef)
let int = null
var play = document.getElementById('startTimer')
var pause = document.getElementById('pauseTimer')
var reset = document.getElementById('resetTimer')
var isPlaying = false

document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    if (isPlaying) {
      pause.click()
    } else {
      play.click()
    }
    isPlaying = !isPlaying
  }
}

document.addEventListener('keyup', function (e) {
  if (e.keyCode == '27') {
    const btn = document.querySelector('.btn3')
    btn.click()
  }
})

/*definindo botão start */
document.getElementById('startTimer').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int)
  }
  int = setInterval(displayTimer, 10)
  document.getElementById('startTimer').style.display = 'none'
  document.getElementById('pauseTimer').style.display = 'inline'
})

/*definindo botão pause*/
document.getElementById('pauseTimer').addEventListener('click', () => {
  clearInterval(int)
  document.getElementById('startTimer').style.display = 'inline'
  document.getElementById('pauseTimer').style.display = 'none'
})

/*definindo botão reset*/

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(int)
  ;[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
  timerRef.innerHTML = '00 : 00 : 00 : 000 '
  document.getElementById('startTimer').style.display = 'inline'
})

/* fazer o cronômetro funcionar quandos milissegundos chegar a 1000, irá ter 0 na célula milissegundos, quando chegar 60 em segundos irá ter 0 na célula, e quando chegar 60 em minutos irá ter 0 em minutos e acrescentará um número em horas.*/
function displayTimer() {
  milliseconds += 10
  if (milliseconds == 1000) {
    milliseconds = 0
    seconds++
    if (seconds == 60) {
      seconds = 0
      minutes++
      if (minutes == 60) {
        minutes = 0
        hours++
      }
    }
  }

  /*quando o tempo for menor que 10 será adicionado dois zeros, e 1 zero será adicionado quando tempo for menos que 100*/

  let h = hours < 10 ? '0' + hours : hours
  let m = minutes < 10 ? '0' + minutes : minutes
  let s = seconds < 10 ? '0' + seconds : seconds
  let ms = milliseconds.toString().padEnd(3, '0')

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}
