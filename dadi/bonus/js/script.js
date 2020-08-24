var imgUrl = "img/";

document.getElementById('throw').addEventListener("click",
function() {

  var dadoCPU = Math.floor(Math.random() * 6) + 1;
  document.getElementById("cpu_number").innerHTML = dadoCPU;
  document.getElementById("cpu_msg").innerHTML = "Il computer tira un dado. È uscito un..."
  var cpuImgUrl = imgUrl + dadoCPU + ".jpg";
  document.getElementById('cpu_dice_img').setAttribute("src", cpuImgUrl);

  var dadoUtente = Math.floor(Math.random() * 6) + 1;
  document.getElementById("user_number").innerHTML = dadoUtente;
  document.getElementById("user_msg").innerHTML = "L'utente tira un dado. È uscito un..."
  var utenteImgUrl = imgUrl + dadoUtente + ".jpg";
  document.getElementById('user_dice_img').setAttribute("src", utenteImgUrl);

  if (dadoCPU > dadoUtente) {
    document.getElementById("message").innerHTML = "Mi dispiace, il computer ha vinto...";
  } else if (dadoUtente > dadoCPU) {
    document.getElementById("message").innerHTML = "Congratulazioni! Hai vinto!";
  } else {
    document.getElementById("message").innerHTML = "E' un pareggio!";
  }

})
