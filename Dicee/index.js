function abc() {
    var x = "images/dice" + (Math.round(Math.random() * 5 + 1)) + ".png";
    document.querySelector('img').setAttribute("src", x)
    var b = "images/dice" + (Math.round(Math.random() * 5 + 1)) + ".png";
    document.querySelector('img.img2').setAttribute('src', b)
}
window.onload = abc()
