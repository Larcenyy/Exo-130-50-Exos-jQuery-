let check = $('input:checkbox')


let sub = $('#submit')
sub.attr('disabled', 'true');

check.click(function (){
    if (check.is(":checked") === true){
        sub.removeAttr('disabled', 'true');
    }
    if (check.is(":checked") === false){
        sub.attr('disabled', 'true');
    }
})

$('input:submit').click(function (){
    if (check.is(":checked") === true){
        alert("Checkbox est coché")
    }
    if (check.is(":checked") === false){
        alert("Checkbox est PAS coché")
    }
    alert($('#info').textContent)
})

let images = $('img')

for (const image of images) {
    image.onerror = function() {
        image.style.display = "none";
    };
}

let test = $('input:text')

function textLimit(limite) {
    test.attr("maxLength", limite)
}

new textLimit(3)

myCligno()

function myCligno() {
    $('span').animate({
        opacity : "0.4",
        "font-size": "20px"
    }, 2000)
    .animate({
        opacity : "1",
        "font-size": "25px"
    }, 2000)
}


$('p').each(function() {
    let words = $(this).text().split(' ');
    let firstWord = words[0];
    $(this).html('<strong>' + firstWord + '</strong>' + words.slice(1).join(' '));

});

$("th").even().css("background-color", "yellow")

$("#color").click(function (){
    $('#test').css({
        'background-color': 'black',
        'color': 'white'
    });
})



function imprimMe() {
    window.print();
}

$('#prim').click(function (){
    imprimMe()
})

$('#addoi').click(function (){
    let createLi = document.createElement("li")
    $("ul").append(createLi)
    createLi.innerHTML = "test"
})
