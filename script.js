var particles = document.getElementById("particles");
var border = ["50%","0%"]; // type of shape, 50% is circle and 0% is square
var colors = ["#88579E","#924BB3","#D8A5F0","#EAD8F2"]; // shape colors

function createParticle(event){
    var x = event.clientX;
    var y = event.clientY;
    var color = Math.floor(Math.random() * 4);

    var div = document.createElement("div"); // create a new div element
    div.style.position = "absolute";
    div.style.marginLeft = x + "px";
    div.style.marginTop = y + "px";
    div.style.width = "10px";
    div.style.borderTop = "5px solid transparent";
    div.style.borderRight = "5px solid transparent";
    div.style.borderLeft = "5px solid transparent";
    div.style.borderBottom = "10px solid " + colors[color];
    div.style.animation = "move 10s ease-in infinite";

    particles.appendChild(div);

    setTimeout(
        function(){
            div.remove();
        }
    , 5000); // removes shape after 5 seconds
}

function getParticles(){
    var np = document.documentElement.clientWidth / 40; // number of particles
    particles.innerHTML = "";
    for (var i = 0; i < np; i++) {

        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w ) + 1;
        var rndh = Math.floor(Math.random() * h ) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 5;
        var opty = Math.floor(Math.random() * 4) + 1;
        var anima = Math.floor(Math.random() * 12) + 8;
        var bdr = Math.floor(Math.random() * 2);
        var color = Math.floor(Math.random() * 4);
        var div = document.createElement("div"); // creates a div element

        div.style.position = "absolute";
        div.style.marginLeft = rndw + "px";
        div.style.marginTop = rndh + "px";
        div.style.width = widthpt + "px";
        div.style.height = widthpt + "px";
        div.style.opacity = opty;
        div.style.backgroundColor = colors[color];
        div.style.borderRadius = border[bdr];
        div.style.animation = "move "+ anima + "s ease-in infinite";

        particles.appendChild(div);
    }
}

function main(event) {
    getParticles();
    particles.addEventListener("click", createParticle); // When click event happens a new particle is created
}

window.addEventListener("resize", main);
window.addEventListener("load", main);
