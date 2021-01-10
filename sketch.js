var walkersNum = 5;
var walkers = [];

function setup() {
    createCanvas(windowWidth, document.body.clientHeight);
    colorMode(HSB, 360, 100, 100);
    noStroke();

    for (var i = 0; i < walkersNum; i++) {
        walkers.push(new Walker());
    }
}

function draw() {
    for (var i = 0; i < walkersNum; i++) {
        walkers[i].display();
        walkers[i].move();
    }
}

function Walker() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = max(width, height) / 150;
    this.delta = this.r;
    this.c = color(random(360), 20, 100);

    this.display = function() {
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.move = function() {
        this.xSign = random(1) < 0.5 ? 1 : -1;
        this.ySign = random(1) < 0.5 ? 1 : -1;

        this.x += this.xSign * this.delta;
        this.y += this.ySign * this.delta;

        var min = this.r / 2;
        var xMax = width - this.r / 2;
        var yMax = height - this.r / 2;

        if (this.x < min) {
            this.x = xMax;
        }
        if (this.x > xMax) {
            this.x = min;
        }
        if (this.y < min) {
            this.y = yMax;
        }
        if (this.y > yMax) {
            this.y = min;
        }

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
