
let isShows = false;
let isLips = false;
let lipsimg, faceimg, eyeimg, neckimg, christmasHead, beard, noseimg, nose1img;
let isFace = false;
let isEye = false;
let isEye1 = false;
let isNeck = false;
let isNeck1 = false;
let isChristmas = false;
let ishead = false;
let isBeard = false;
let isNose = false;
let isNose1 = false;
let isBg2 = false;
let isaddear = false;
let bg1, bg2, bg3, bg4, bg5;

cont = [
    127, 234, 132, 58, 172, 150, 149, 148, 152, 377, 378, 379, 397, 288, 361, 454,
    356,
];
lips = [57, 40, 37, 0, 267, 270, 287, 321, 314, 17, 84, 91];
brows = [70, 63, 105, 66, 107, 336, 296, 334, 293, 300];
nose = [168, 6, 195, 4, 98, 97, 2, 326, 327];
eyes = [33, 160, 158, 133, 153, 144, 362, 385, 387, 263, 373, 380];
mouth = [78, 81, 13, 311, 308, 402, 14, 178];
face = [234];
ears2 = [454];


let facediv = document.getElementById("ears");
let headdiv = document.getElementById("head");
let foreheaddiv = document.getElementById("forehead");
let bearddiv = document.getElementById("beard");
let nosediv = document.getElementById("nose");
let nose1div = document.getElementById("nosepin");
let eyediv = document.getElementById("eye");
let eye1div = document.getElementById("coolers");
let necklessdiv = document.getElementById("neck");
let neckless1div = document.getElementById("neck1");
let lipsdiv = document.getElementById("lips");
let bg2div = document.getElementById("bg2");
let addearsdiv = document.getElementById("addear");



facediv.onclick = function () {
    if (!isFace) {
        facediv.style.backgroundColor = "yellow";
    } else {
        facediv.style.backgroundColor = "black";
    }
    isFace = !isFace;
    //myp5.detectface();
};
headdiv.onclick = function () {
    if (!isChristmas) {
        headdiv.style.backgroundColor = "yellow";
    } else {
        headdiv.style.backgroundColor = "black";
    }
    isChristmas = !isChristmas;
    //myp5.detectChristmas();
};
foreheaddiv.onclick = function () {
    if (!ishead) {
        foreheaddiv.style.backgroundColor = "yellow";
    } else {
        foreheaddiv.style.backgroundColor = "black";
    }
    ishead = !ishead;
    //myp5.detectHead();
};
bearddiv.onclick = function () {
    if (!isBeard) {
        bearddiv.style.backgroundColor = "white";
    } else {
        bearddiv.style.backgroundColor = "black";
    }
    isBeard = !isBeard;
    //myp5.detectBeard();
};
nosediv.onclick = function () {
    if (!isNose) {
        nosediv.style.backgroundColor = "yellow";
    } else {
        nosediv.style.backgroundColor = "black";
    }
    isNose = !isNose;
    //myp5.detectNose();
};
nose1div.onclick = function () {
    if (!isNose1) {
        nose1div.style.backgroundColor = "yellow";
    } else {
        nose1div.style.backgroundColor = "black";
    }
    isNose1 = !isNose1;
    //myp5.detectNose();
};
eyediv.onclick = function () {
    if (!isEye) {
        eyediv.style.backgroundColor = "yellow";
    } else {
        eyediv.style.backgroundColor = "black";
    }
    isEye = !isEye;
    //myp5.detectEyes();
};
eye1div.onclick = function () {
    if (!isEye1) {
        eye1div.style.backgroundColor = "yellow";
    } else {
        eye1div.style.backgroundColor = "black";
    }
    isEye1 = !isEye1;
    //myp5.detectEyes();
};
necklessdiv.onclick = function () {
    if (!isNeck) {
        necklessdiv.style.backgroundColor = "yellow";
    } else {
        necklessdiv.style.backgroundColor = "black";
    }
    isNeck = !isNeck;
    //myp5.detectNeck();
};
neckless1div.onclick = function () {
    if (!isNeck1) {
        neckless1div.style.backgroundColor = "yellow";
    } else {
        neckless1div.style.backgroundColor = "black";
    }
    isNeck1 = !isNeck1;
    //myp5.detectNeck();
};
lipsdiv.onclick = function () {
    if (!isLips) {
        lipsdiv.style.backgroundColor = "yellow";
    } else {
        lipsdiv.style.backgroundColor = "black";
    }
    isLips = !isLips;
    //myp5.detectLips();
};

bg2div.onclick = function () {
    if (!isBg2) {
        bg2div.style.backgroundColor = "yellow";
    } else {
        bg2div.style.backgroundColor = "black";
    }
    isBg2 = !isBg2;
    //myp5.detectBg2();
};

addearsdiv.onclick = function () {
    if (!isaddear) {
        addearsdiv.style.backgroundColor = "yellow";
    } else {
        addearsdiv.style.backgroundColor = "black";
    }
    isNose = !isNose;
    //myp5.detectface();
};

$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};



let sketch = function (p) {
    let canvas;

    p.preload = function () {
        lipsimg = p.loadImage("assets/lips.png");
        ears1img = p.loadImage("assets/eraTOP.png");
        ears2img = p.loadImage("assets/eraTOP.png");
        eyeimg = p.loadImage("assets/eye.png");
        eye1img = p.loadImage("assets/coolers.png");
        neckimg = p.loadImage("assets/necklace.png");
        neck1img = p.loadImage("assets/chain.png");
        christmasHead = p.loadImage("assets/crown.png");
        beard = p.loadImage("assets/beard.png");
        noseimg = p.loadImage("assets/nose.png");
        nose1img = p.loadImage("assets/nosepin.png");
        ForeHeadimg = p.loadImage("assets/nethichutti.png");
        bg2 = p.loadImage("assets/background2.png");


    };

    p.setup = function () {
        canvas = p.createCanvas(880, 680);
        canvas.id("canvas");
    };

    p.draw = function () {
        p.clear();

        if (detections == undefined) {
            alert("please wait");
        } else {
            headdiv.disabled = true;
            nosediv.disabled = true;
        }


        if (detections != undefined && isShows) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.faceMash();
            }
        }


        if (detections != undefined && isLips) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectLips();
            }
        }


        if (detections != undefined && isFace) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();
                p.detectears2();
            }
        }


        if (detections != undefined && isEye) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes();
            }
        }

        if (detections != undefined && isEye1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();
            }
        }


        if (detections != undefined && isNeck) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        }
        if (detections != undefined && isNeck1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck2();
            }
        }

        if (detections != undefined && isChristmas) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectChristmas();
            }
        }

        if (detections != undefined && ishead) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectHead();
            }
        }

        if (detections != undefined && isBeard) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectBeard();
            }
        }


        if (detections != undefined && isNose) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNose();
            }
        }

        if (detections != undefined && isNose1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNose1();
            }
        }


        if (detections != undefined && isBg2) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectBg2();
            }
        }


    };


    p.faceMash = function () {
        p.stroke(0);
        p.strokeWeight(3);

        for (let i = 0; i < detections.multiFaceLandmarks[0].length; i++) {
            let x = detections.multiFaceLandmarks[0][i].x * p.width;
            let y = detections.multiFaceLandmarks[0][i].y * p.height;
            p.vertex(x, y);
        }
        p.endShape();
    };


    p.detectLips = function () {
        let x, y;



        for (let i = 0; i < lips.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][lips[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][lips[i]].y * p.height;

            }
        }

        p.image(lipsimg, x - 60, y - 30);
        lipsimg.resize(140, 80);
    };


    p.detectears1 = function () {
        let x, y;

        for (let i = 0; i < face.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][face[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][face[i]].y * p.height;

            }
        }

        p.image(ears1img, x - 50, y + 20);
        ears1img.resize(80, 80);
    };

    p.detectears2 = function () {
        let x, y;

        for (let i = 0; i < ears2.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][ears2[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][ears2[i]].y * p.height;

            }
        }

        p.image(ears2img, x - 30, y + 20);
        ears2img.resize(80, 80);
    };


    p.detectEyes = function () {
        let x, y;

        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;

            }
        }

        p.image(eyeimg, x - 105, y - 48);
        eyeimg.resize(140, 100);
    };

    p.detectEyes2 = function () {
        let x, y;

        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;

            }
        }

        p.image(eye1img, x - 135, y - 70);
        eye1img.resize(200, 140);
    };

    // detect neck
    p.detectNeck = function () {
        let x, y;
        // p.stroke(0, 255, 0);
        // p.strokeWeight(5);
        // p.beginShape(p.POINTS);
        for (let i = 0; i < cont.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;
                // p.vertex(x, y);
            }
        }
        //p.endShape();
        p.image(neckimg, x - 300, y + 110);
        neckimg.resize(400, 350);
    };
    p.detectNeck2 = function () {
        let x, y;
        //p.stroke(0, 255, 0);
        //p.strokeWeight(5);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < cont.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;
                p.vertex(x, y);
            }
        }
        //p.endShape();
        p.image(neck1img, x - 230, y + 110);
        neck1img.resize(300, 300);
    };

    // detect chrimstas
    p.detectChristmas = function () {
        let x, y;
        //p.stroke(0, 255, 0);
        //p.strokeWeight(5);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;
                //p.vertex(x, y);
            }
        }
        //p.endShape();
        p.image(christmasHead, x - 150, y - 320);
        christmasHead.resize(250, 250);
    };

    p.detectHead = function () {
        let x, y;
        //p.stroke(0, 255, 0);
        //p.strokeWeight(5);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;
                //p.vertex(x, y);
            }
        }
        //p.endShape();
        p.image(ForeHeadimg, x - 200, y - 220);
        ForeHeadimg.resize(300, 200);
    };

    // beardDetection
    p.detectBeard = function () {
        let x, y;
        //p.stroke(255, 0, 0);
        //p.strokeWeight(3);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < lips.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][lips[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][lips[i]].y * p.height;
                p.vertex(x, y);
            }
        }
        //p.endShape();
        p.image(beard, x - 100, y - 60);
        beard.resize(250, 300);
    };

    // nose detection
    p.detectNose = function () {
        let x, y;
        //p.stroke(255, 0, 0);
        //p.strokeWeight(3);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < nose.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][nose[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][nose[i]].y * p.height;
                //       p.vertex(x, y);
            }
        }
        // p.endShape();
        p.image(noseimg, x - 130, y - 100);
        noseimg.resize(220, 120);
    };

    p.detectNose1 = function () {
        let x, y;
        //p.stroke(255, 0, 0);
        //p.strokeWeight(3);
        //p.beginShape(p.POINTS);
        for (let i = 0; i < nose.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][nose[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][nose[i]].y * p.height;
                //       p.vertex(x, y);
            }
        }
        // p.endShape();
        p.image(nose1img, x - 60, y - 30);
        nose1img.resize(30, 30);
    };


    // bg2 detection
    p.detectBg2 = function () {
        p.image(bg2, -20, -75);
        bg2.resize(680, 880);
    };



    // show and hide the key points
    p.keyPressed = function () {
        if (p.keyCode == p.LEFT_ARROW) {
            isShows = !isShows;
        }
        if (p.keyCode == p.RIGHT_ARROW) {
            isLips = !isLips;
        }
    };

    // check key press

};

let myp5 = new p5(sketch);
