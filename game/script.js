var pName = window.prompt("What is your name?(Exceed 10 characters and it will get cut to 10 characters)", "Player");
pName = pName.substring(0, 10);

$("pname").html(pName);

$("#trainBut").click(function() {
    window.location.href = "/game/training";
});

setTimeout(() => {
    $("#trainBut").css("display", "block");
}, 13000);



$('#message').typewrite({
    'delay': 50, 
    'extra_char': '', 
    'trim': true, // Trim the string to type (Default: false, does not trim)
    'callback': null // if exists, called after all effects have finished
});