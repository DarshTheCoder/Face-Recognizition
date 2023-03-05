Webcam.set()({
    width:400,
    height:350,
    image_format:"png",
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("camera").innerHTML='<img id="capture"src="'+data_uri+'"/>';

});
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PeQzClCtI/model.json',modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded');
}