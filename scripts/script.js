var content = document.querySelector('#content');
function klickFoto() {
var cont = document.querySelector('#content');
var myFotos = [];
    for (var i=0; i<=99; i++) {
    myFotos [i] = "images/startpage/" + i + ".jpg";
    }
var sluch = Math.floor(Math.random() * myFotos.length);
var content = ('<img src='+myFotos[sluch]+'>');
    cont.innerHTML=content;
}
content.addEventListener('click', klickFoto);
klickFoto();
