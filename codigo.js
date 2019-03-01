cabecalho = document.getElementById('cab');
par = document.getElementById('par');

bot = document.getElementById('bt');



bot.addEventListener("click", function(){
  cabecalho.innerHTML = "Eis o grande hacker!";
  par.innerHTML = "seu nome é Zero";
  bot.innerHTML="Obrigado!";
  document.body.style.backgroundColor = "red";
});

