

let video = document.getElementsByClassName("video-screen")[0];
function play(){
    video.play();
}
var temp = 0;
function tempo(temp){
    video.play();
    video.currentTime = temp;
    
    
}
var cronometro;
var segundos = 0;
var minutos = 0;
var horas = 0;

// função para atualizar a exibição do cronômetro
function atualizarCronometro() {
    
  // incrementa os segundos
  segundos++;
  // se chegou a 60 segundos, incrementa os minutos e zera os segundos
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  // se chegou a 60 minutos, incrementa as horas e zera os minutos
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }
  // exibe o cronômetro no formato hh:mm:ss
  var tempo = (horas < 10 ? "0" + horas : horas) + ":" +
              (minutos < 10 ? "0" + minutos : minutos) + ":" +
              (segundos < 10 ? "0" + segundos : segundos);
  document.getElementById("cronometro").innerHTML = tempo;
}

// função para iniciar o cronômetro
function iniciarCronometro() {
  cronometro = setInterval(atualizarCronometro, 1000); // a cada segundo
}

// função para parar o cronômetro
function pararCronometro() {
  clearInterval(cronometro);
}