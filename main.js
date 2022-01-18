function setup()
{
canvas=createCanvas(500,500);
canvas.center();
camera=createCapture(VIDEO);
camera.hide();
}
function draw()
{
    image(camera,0,0,500,500);
}