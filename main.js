nose_x = 0
nose_y = 0
differencey7dg = 0
rightx = 0
lightx = 0



function setup() {
    Webcam = createCapture(VIDEO);
    Webcam.size(510, 1000);

    canvas = createCanvas(482, 666);
    canvas.position(550, 150);

    vara = ml5.poseNet(Webcam, Moadeloadead);
    vara.on('pose', HEHA);
}

function Moadeloadead() {
    console.log('ezezezezeezezez hah so bad code!');
}

function draw() {
    background('#969A97');
    fill('#F69420')
    stroke('#F78192')

    document.getElementById("square_site").innerHTML = 'wid an hgh sizzlywiizllay - -=- =[ =[ =- :- '+ differencey7dg + 'px'
    square(nose_x,nose_y,differencey7dg)
}

function HEHA(results) {
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        console.log("NosEX = "+nose_x+"NOSEYezez = "+nose_y)
        lightx = results[0].pose.leftWrist.x
        rightx = results[0].pose.rightWrist.x
        differencey7dg = floor(lightx - rightx)

    }
}





