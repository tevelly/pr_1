

document.getElementById("myButton").addEventListener("click", newRandowQuote);

var textArray  = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

function newRandowQuote() {
    var randomNumb = Math.floor(Math.random()*(textArray.length));
    document.getElementById('randonText').innerHTML=textArray[randomNumb];
}
