for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var MouseClick = this.innerHTML
        addSound(MouseClick);
        addAnimation(MouseClick);
    })
}

document.addEventListener("keypress", function (event) {
    var KeyboardPress = event.key
    addSound(KeyboardPress);
    addAnimation(KeyboardPress);
})


function addSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case 's':
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case 'j':
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case 'k':
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case 'l':
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        default:
            console.log(event.key);

    }
}

function addAnimation(letter) {
    document.querySelector("." + letter).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + letter).classList.remove("pressed");
    }
        , 100);
}


