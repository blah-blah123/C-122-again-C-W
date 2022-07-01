x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function setup(){
    canvas= createCanvas(900,600);
}

function start(){
    document.getElementById("status").innerHTML= "System is listening, please speak.";
    recognition.start();
}

recognition.onresult= function(event)
{
    console.log(event);
    var content= event.results[0][0].transcipt;
    document.getElementById("status").innerHTML= "The speech has been recognised as: " + content;
    if(content == "circle"){
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML= "Started drawing a circle! moja hi moja!";
        draw_circle= "set";
    }

    if(content == "rectangle"){
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML= "Started drawing a rectangle! Everybody say shawa shawa!!!";
        draw_rect= "set";
    }
}

function draw(){
    if (draw_circle == "set"){
        radius= Math.floor(Math.random() * 100);
        circle(x , y, radius);
        document.getElementById("status").innerHTML= "Circle is drawn! kya roti hai!!!";
        draw_circle= "";
    }

    if (draw_rect == "set"){
        rect(x,y, 70,50);
        document.getElementById("status").innerHTML= "Rectangle is drawn! kya table hai khaane ka!!!";
        draw_rect= "";
    }
}