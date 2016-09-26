// Reusable function to get random colors
// Courtesy: http://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// When you click on the page, let's change the text color
document.onclick = function(){
    //console.log("hello");
    // Get the container div
    var container = document.getElementById("container");
    // Set variable to new color on each click
    var newTextColor = getRandomColor();
    // Print out that new color to the console
    console.log(newTextColor);
    // Set the CSS color of everything in #container to the new color
    container.style.color = newTextColor;
};
