var canvas = document.querySelector(".hacker-3d-shiz"),
  ctx = canvas.getContext("2d"),
  canvasBars = document.querySelector(".bars-and-stuff"),
  ctxBars = canvasBars.getContext("2d"),
  outputConsole = document.querySelector(".output-console");

canvas.width = window.innerWidth * 0.66;
canvas.height = window.innerHeight * 0.66;

canvasBars.width = window.innerWidth * 0.33;
canvasBars.height = canvas.height;

outputConsole.style.height = window.innerHeight * 0.33 + "px";

var focal = canvas.width / 2,
  vpx = canvas.width / 2,
  vpy = canvas.height / 2,
  squares = [],
  barVals = [],
  sineVal = 0;

// Cube rotation effect
function Cube(z) {
  this.width = canvas.width / 3;
  this.height = canvas.height / 3;
  z = z || 0;

  this.points = [
    new Point({
      x: canvas.width / 2 - this.width,
      y: canvas.height / 2 - this.height,
      z: z,
    }),
    new Point({
      x: canvas.width / 2 + this.width,
      y: canvas.height / 2 - this.height,
      z: z,
    }),
    new Point({
      x: canvas.width / 2 + this.width,
      y: canvas.height / 2 + this.height,
      z: z,
    }),
    new Point({
      x: canvas.width / 2 - this.width,
      y: canvas.height / 2 + this.height,
      z: z,
    }),
  ];

  this.dist = 0;
}

Cube.prototype.update = function () {
  for (var p = 0; p < this.points.length; p++) {
    this.points[p].rotateX(0.01);
    this.points[p].rotateY(0.01);
    this.points[p].rotateZ(0.02);
    this.points[p].z -= 2;
    if (this.points[p].z < -300) {
      this.points[p].z = 2700;
    }
    this.points[p].map2D();
  }
};

Cube.prototype.render = function () {
  ctx.beginPath();
  ctx.moveTo(this.points[0].xPos, this.points[0].yPos);
  for (var p = 1; p < this.points.length; p++) {
    if (this.points[p].z > -(focal - 50)) {
      ctx.lineTo(this.points[p].xPos, this.points[p].yPos);
    }
  }

  ctx.closePath();
  ctx.stroke();

  this.dist = this.points[this.points.length - 1].z;
};

function Point(pos) {
  this.x = pos.x - canvas.width / 2 || 0;
  this.y = pos.y - canvas.height / 2 || 0;
  this.z = pos.z || 0;

  this.xPos = 0;
  this.yPos = 0;
  this.map2D();
}

Point.prototype.rotateX = function (angleX) {
  var cosX = Math.cos(angleX),
    sinX = Math.sin(angleX),
    y1 = this.y * cosX - this.z * sinX,
    z1 = this.z * cosX + this.y * sinX;

  this.y = y1;
  this.z = z1;
};

Point.prototype.rotateY = function (angleY) {
  var cosY = Math.cos(angleY),
    sinY = Math.sin(angleY),
    x1 = this.x * cosY - this.z * sinY,
    z1 = this.z * cosY + this.x * sinY;

  this.x = x1;
  this.z = z1;
};

Point.prototype.rotateZ = function (angleZ) {
  var cosZ = Math.cos(angleZ),
    sinZ = Math.sin(angleZ),
    x1 = this.x * cosZ - this.y * sinZ,
    y1 = this.y * cosZ + this.x * sinZ;

  this.x = x1;
  this.y = y1;
};

Point.prototype.map2D = function () {
  var scaleX = focal / (focal + this.z),
    scaleY = focal / (focal + this.z);

  this.xPos = vpx + this.x * scaleX;
  this.yPos = vpy + this.y * scaleY;
};

// Init cube animation
for (var i = 0; i < 15; i++) {
  squares.push(new Cube(-300 + i * 200));
}

ctx.strokeStyle = "#FF0233";

// Update and render loop
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  squares.sort(function (a, b) {
    return b.dist - a.dist;
  });
  for (var i = 0, len = squares.length; i < len; i++) {
    squares[i].update();
    squares[i].render();
  }

  // Add to console output
  if (sineVal % 100 === 0) {
    var randomMessage = [
      "HACKING INTO MAINFRAME...",
      "INJECTING MALWARE...",
      "ACCESSING SECURE DATABASE...",
      "DECRYPTING ENCRYPTED FILES...",
      "SYSTEM COMPROMISED...",
    ][Math.floor(Math.random() * 5)];
    var newMessage = document.createElement("p");
    newMessage.innerHTML = `<span>${randomMessage}</span>`;
    outputConsole.appendChild(newMessage);
  }

  sineVal++;
  requestAnimationFrame(render);
}

render();
function showPopup() {
  const popup = document.querySelector(".popup-overlay");
  popup.style.visibility = "visible"; // Show the popup
  setTimeout(() => {
    popup.style.visibility = "hidden"; // Hide after 5 seconds
  }, 5000);
}

// Example usage: Call this function when hacking starts
showPopup();
