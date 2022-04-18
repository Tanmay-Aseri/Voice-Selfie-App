var SpeechRecognition = window.webkitSpeechRecognition ;

var recognition  = new SpeechRecognition() ;

function take_selfie(){
    
    document.getElementById("text_area").innerHTML = " " ; 
    recognition.start() ;
}

recognition.onresult = function (event){
    console.log(event) ; 


var Content = event.results[0][0].transcript ; 
document.getElementById("text_area").innerHTML = Content ; 
console.log(Content) ; 

if (Content == "take my selfie"){
    console.log("taking selfie") ; 
    speak() ; 
}

}
   
function speak(){
    var synth = window.speechSynthesis ;
    speak_data =  "taking you selfie in 5 seconds" ; 
    var utter_this = new SpeechSynthesisUtterance(speak_data) ;  
    synth.speak(utter_this) ; 
    Webcam.attach(camera) ;  
setTimeout(function(){
    take_snapshot(); 
    save(); 
},5000);

}

camera = document.getElementById("webcam") ;
Webcam.set({ 
    width :360 , 
    height : 250 , 
    image_format : 'jpeg' , 
    jpeg_quality : 90
}) ; 

function take_snapshot(){
    Webcam.snap(function(dataURI){
        document.getElementById("result").innerHTML = 
    "<img id = 'selfie_img' src='"+dataURI+"'>"
    });
    
};

function save()
{
    link = document.getElementById("link") ; 
    image = document.getElementById("selfie_img").src; 
    link.href = image ; 
    link.click();
}