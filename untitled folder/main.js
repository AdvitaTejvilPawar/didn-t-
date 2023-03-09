var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult= function(event){
    console.log(event)
    var dialogue = event.results[0][0].transcript
    document.getElementById("textbox").value = dialogue
    if(dialogue=="selfie" ){
        speak() 
     }
}

function speak(){
    var synth= window.speechSynthesis;
    dialogue1="Taking your selfie in 5 seconds"
    var speechFormat=new SpeechSynthesisUtterance(dialogue1)
    synth.speak(speechFormat)
     Webcam.attach(camera);
}
camera=document.getElementById("camera")

Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:90

})