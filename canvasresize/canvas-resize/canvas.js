var canvas = document.querySelector('canvas')
;

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext(`2d`);
/*c.fillStyle = "red"
c.fillRect(100, 100, 100, 100)
c.fillStyle = "green";
c.fillRect(300, 100, 100, 100)

//line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,300);
c.strokeStyle = "blue"
c.stroke();

//circle/arc
c.beginPath();
c.arc (300, 300, 30, 0, Math.PI * 2, false)
c.stroke();

for (var i = 0; i < 20; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
c.arc (x, y, 30, 0, Math.PI * 2, false)
c.stroke();
}
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 8;
var dx = (Math.random() - 0.5) * 8;
var radius = 30;*/

//moving circle
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc (this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue';
        c.fill();
        c.stroke();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
    
}
//var x = Math.random() * innerWidth;
//var y = Math.random() * innerHeight;
//var dy = (Math.random() - 0.5) * 8;
//var dx = (Math.random() - 0.5) * 8;
//var radius = 30;
var circleArray = [];

for (var i = 0; i < 100; i++){
    
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dy = (Math.random() - 0.5);
var dx = (Math.random() - 0.5);
var radius = 30;
circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].update();
    }
}

animate();