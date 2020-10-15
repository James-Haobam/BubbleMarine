const bubble = document.querySelectorAll('.bubble');
const btn = document.querySelectorAll('.btn');

for(let i = 0; i < btn.length; i++){

btn[i].addEventListener('click', () => {
  alert('Oops! This is just a dummy web page not a functional')
});
}

for(let i = 0; i < bubble.length; i++){
  bubble[i].addEventListener('click',() => {

    bubble[i].classList.add('pop');
    let audio = new Audio('sound/bubblePop.mp3');
    audio.play();
    setTimeout(() => {
      bubble[i].classList.remove('pop');
    },2300);

  });
}

console.log(bubble);
