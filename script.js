var particles = document.getElementById("particles");// getting at the particles div in html
var border = ["50%","0%"]; // array for the type of shape, 50% is circle and 0% is square
var colors = ["#F9A66C","#FFC94B","#F17A7E"]; // array for the color of the shape

function createParticle(event){
    var x = event.clientX; // x coordinate of mouse click
    var y = event.clientY; // y coordinate of mouse click
    var color = Math.floor(Math.random() * 3); // sets color to random number 0-3 rounded down to nearest whole integer

    var div = document.createElement("div"); // create a new div element
    div.style.position = "absolute"; // gives div a position of absolute
    div.style.marginLeft = x + "px"; // gives div left margin start of where x coordinate of click was in pixels
    div.style.marginTop = y + "px"; // gives div top margin start of where y coordinate of click was in pixels
    div.style.width = "10px"; // gives div a width of 10px
    div.style.borderTop = "5px solid transparent"; // gives div a top border that's 5px, solid, and transparent
    div.style.borderRight = "5px solid transparent"; // gives div a right border that's 5px, solid, and transparent
    div.style.borderLeft = "5px solid transparent"; // gives div a left border that's 5px, solid, and transparent
    div.style.borderBottom = "10px solid " + colors[color]; // gives div a bottom border that's 10px, solid, and a color that corresponds with the value of color var
    div.style.animation = "move 10s ease-in infinite"; // goes with keyframes for move and sets animation to 10 second duration, ease-in for timimg and infinite for animation iteration
    particles.appendChild(div); // appends new div to partivle div

    // sets a specific time to wait before performing the function
    setTimeout(
        function(){
            div.remove();
        } // function removes the new div element from the document
    , 5000); // after 5 seconds (5000 ms)
}

function getParticles(){
    var np = document.documentElement.clientWidth / 40; // divides viewable HTML element width by 40 which affects how many particles there are
    particles.innerHTML = ""; // sets particle HTML content as empty string
    for (var i = 0; i < np; i++) { // FOR LOOP starting at 0 increasing by 1 for as long as i is less than the number of new particles run the below
        var w = document.documentElement.clientWidth; // get viewable HTML element width set to w
        var h = document.documentElement.clientHeight; // get viewable HTML element height set to h
        var rndw = Math.floor(Math.random() * w ) + 1; // random number bewteen 0 - viewable width rounded down to nearest whole integer plus 1 - where appears on screen x axis
        var rndh = Math.floor(Math.random() * h ) + 1; // random number bewteen 0 - viewable height  - rounded down to nearest whole integer +1 - where appears on screen y axis
        var widthpt = Math.floor(Math.random() * 8) + 5; // random number between 0-8 rounded down to nearest whole integer +5 - width of particle
        var opty = Math.floor(Math.random() * 4) + 1; // random number between 0-4 rounded down to nearest whole integer +1
        var anima = Math.floor(Math.random() * 12) + 8; // random number between 0-12 rounded down to nearest whole integer +8
        var bdr = Math.floor(Math.random() * 2); // random number between 0-2 rounded down to nearest whole integer (2 because there are 2 border options in array)
        var color = Math.floor(Math.random() * 3); // random number between 0-3 rounded down to nearest whole integer (3 because there are 3 colors in array)

        var div = document.createElement("div"); // creates a div element
        div.style.position = "absolute"; // gives div a position of absolute
        div.style.marginLeft = rndw + "px"; // gives div a left margin of the random width number found above in pixels
        div.style.marginTop = rndh + "px"; // gives div a top margin of the random height number found above in pixels
        div.style.width = widthpt + "px"; // gives div a width of random number found above in pixels
        div.style.height = widthpt + "px"; // gives div a height of the random number found above in pixels
        div.style.opacity = opty; // gives div an opacity of the random number calculated above
        div.style.backgroundColor = colors[color]; // gives div a background color that corresponds with the random number in the array of colors
        div.style.borderRadius = border[bdr]; // gives div a border-radius that corresponds with the random number in the array of borders
        div.style.animation = "move "+ anima + "s ease-in infinite"; // goes with keyframes for move and sets animation to random number found above in seconds for duration, ease-in for timimg and infinite for animation iteration
        particles.appendChild(div); // appends new div to particle div
    }
}

function main(event){ // main function
    getParticles(); // calls getParticles function
    particles.addEventListener("click", createParticle); // When click even happens in particle div createParticle function is called
}

window.addEventListener("resize", main); // calls main function when window is resized
window.addEventListener("load", main); // calls main function when window loads
