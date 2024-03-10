Webcam.set{(
width:350
height:300
image_format : 'png',
png_quality:90
});

 camera = document.getElementById("camera");

Webcam.attach("#camera")

function takr_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+"/>";
    });
}

console.log('m15 version:', m15.version);

classifier = m15.imageClassifier("https://teachablemachine.withgoogle.com/models/WCgpVx870/model.json",modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult{error, results} (
    if {error} {
        console.error{error};
    } else {
        console.log(results);

        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;

        toSpeak = "";

        if(gesture == "ok")
        {
            toSpeak = "okie dokie";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
        }
        toSpeak = "";

        if(gesture == "Good")
        {
            toSpeak = "Good job";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
        }
        toSpeak = "";

        if(gesture == "Bad")
        {
            toSpeak = "Bad job";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128078;";
        }
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = now SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis)
}