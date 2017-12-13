function setup() {
    createCanvas(900, 900);
    strokeWeight(9);
    stroke(0);
}

function draw() {
    background(255);

    //rectangle(x1, y1, width, height)
    fill(15, 149, 37)
    rect(300, 300, 300, 300);

    fill(0,0,0)
    rect(350, 400, 60, 60);
    rect(490, 400, 60, 60);
    rect(419, 440, 62, 70);
    rect(380, 480, 30, 70);
    rect(490, 480, 30, 70);
}