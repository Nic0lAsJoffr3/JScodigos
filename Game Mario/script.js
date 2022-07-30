
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const jump_c = document.querySelector(".jump");

//sons
var sound = new Howl({
  src: ['sons/thema.ogg'],
  volume: 0.7,
})
var jump_s = new Howl({
  src: ['sons/Jump.wav'],
  volume: 0.9,
});

var end = new Howl({
  src: ['sons/game-over.mp3'],
  volume: 2.0,
});


  var tempo = 0;
  var velocidade = 2;
  
sound.play()
  const jump = () => {

    jump_s.play()



    mario.classList.add("jump");




    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }


setTimeout(() => {


  const loop = setInterval(() => {


    velocidade = (tempo < 3000 ? 2.2 : (tempo < 6000 ? 2.1 : (tempo < 10000 ? 2 : 1.5)));
    pipe.style.animationDuration = velocidade;
    tempo += (velocidade * 10) - 14;
    document.getElementById("time_g").innerHTML = "Tempo jogado:  " + tempo;
    document.getElementById("time").innerHTML = "Tempo:  " + tempo;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');
    if (tempo >= 10000) {
      document.querySelector(".game").style.animation = 'hard 40s 5s infinite linear';
    }
    console.log(marioPosition);
    if (pipePosition <= 120 && pipePosition >= 0 && marioPosition < 80) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;
      clouds.style.animation = 'none';
      clouds.style.left = `${cloudsPosition}px`;

      mario.src = 'image/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      document.querySelector(".game-over").style.display = "block";
      document.querySelector(".game").style.border = "none";
      sound.unload();
      jump_s.unload();
      end.play();
      clearInterval(loop);
    }
  }, 10);

}, 3000)
  
  
 

