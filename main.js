Webcam.set({
    width:310,
    height:300,
    Imageformat:'png',
    pngquality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}
function check(){
    img=document.getElementById('capturedimage');
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
    }
}