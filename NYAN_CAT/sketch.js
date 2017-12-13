function setup() {
    createCanvas(900, 600);
    strokeWeight(9);
    stroke(0);
}

function draw() {
    background(255);

    //arc(x, y, d1, d2, start_angle, end_angle)
    fill(255, 204, 229)
    arc(550, 400, 40, 60, 0, PI+PI);
    arc(490, 400, 40, 60, 0, PI+PI);
    arc(300, 400, 40, 60, 0, PI+PI);
    arc(350, 400, 40, 60, 0, PI+PI);
    fill(204)
    arc(280, 320, 160, 20, PI/2, PI/2+PI);

    //rectangle(x1, y1, width, height)
    fill(255, 229, 204)
    rect(280, 190, 260, 200);
    fill(255, 153, 255)
    rect(300, 220, 220, 140);

    //triangle
    fill(255, 204, 229)
    triangle(580, 230, 580, 300, 500, 300);
    triangle(450, 230, 450, 300, 530, 300);

    fill(204)
    ellipse(520, 330, 150, 150);

    line(490, 310, 490, 310);
    line(550, 310, 550, 310);

    arc(510, 360, 20, 30, 0, PI);
    arc(530, 360, 20, 30, 0, PI);
}