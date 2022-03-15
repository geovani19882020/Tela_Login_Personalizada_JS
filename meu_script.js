

document.getElementById("btn-branco").addEventListener("click", function(){

    document.querySelector("body").setAttribute("class", "branco");
    document.querySelector("h1").setAttribute("class", "mod");
    document.querySelector("button").setAttribute("class", "btn-link");
    $('.onda2').show();
    $('.onda1').hide();
    $('#btn-branco').hide();
    $('#branco2').show();
    $('.footer').css('background', '#FF5500');

});

document.getElementById("branco2").addEventListener("click", function(){

    document.querySelector("body").setAttribute("class", "branco1");
    document.querySelector("h1").setAttribute("class", "mod1");
    document.querySelector("button").setAttribute("class", "btn-G");
    $('.footer').css('background', '#0099ff');
    $('.onda1').show();
    $('.onda2').hide();
    $('#btn-branco').show();
    $('#branco2').hide();


});


// $('.box').tilt({
  //  scale: 1
// })



const floatingPassword = document.getElementById('floatingPassword');
const olho = document.getElementById('olho');

function showHide() {

if (floatingPassword.type === 'password') {
    floatingPassword.setAttribute('type', 'text');
    $('.olho2').show();
    $('#olho').hide();

   
} else {
    floatingPassword.setAttribute('type', 'password');
    $('#olho').show();
    $('.olho2').hide();
}

}


