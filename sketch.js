var canvas;

var bgIMG

var page_1, page_2, page_3_1, page_3_2;

function preload()
{
    bgIMG = loadImage("bg.jpg");
}

function setup()
{
    canvas = createCanvas(windowWidth-7, windowHeight-7.8);

    page_1 = new Page1();
}

function draw()
{
    background(bgIMG);

    page_1.display();
}