const buttonYes = document.querySelector('.button--yes')
const buttonNo = document.querySelector('.button--no')
const title = document.querySelector('.valentine-title')
const image = document.querySelector('.valentine__img')
let myArr = ['Точно?', 'Точно точно?', '100% ?', 'Прям уверена?', 'Хорошо подумай']
const audio = new Audio()
audio.src = './clickYes.mp3'

buttonYes.addEventListener('click', () => {
  if (image.classList.toggle('open')) {
    image.src = 'img/decor/kiss.gif'
    title.textContent = 'Ok yay!!!'
    buttonYes.classList.add('hidden')
    buttonNo.classList.add('hidden')
  } else {
    image.src = 'img/decor/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
  }
})

let index = 0

buttonNo.addEventListener('click', () => {
  let width = buttonYes.clientWidth
  buttonYes.style.width = width + 3 + 'px'
  let height = buttonYes.clientHeight
  buttonYes.style.height = height + 3 + 'px'
  
  buttonNo.textContent = myArr[index];
  index = (index + 1) % myArr.length;
})
