dog=0;
cat=0;
duck=0;
lion=0;
console.log("hi")
function startClassification() {
    console.log("hi");
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3Ps23gExP/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,result) {
    if(error) {
    console.log(error);
    }
    else {
       console.log(result);
       r=Math.floor(Math.random()*255)+1;
       g=Math.floor(Math.random()*255)+1;
       b=Math.floor(Math.random()*255)+1;

       document.getElementById("result_label").innerHTML="Detected voice is of a -"+result[0].label;
       document.getElementById("number_of_animal").innerHTML="Detected Dog- "+dog+"<br>"+"Detected Cat-  "+cat+"<br>"+"Detected Lion- "+lion+"<br>"+"Detected Duck-"+duck;
       document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
       document.getElementById("number_of_animal").style.color="rgb("+r+","+g+","+b+")";

       img=document.getElementById("image_result");

       if(result[0].label=="Dog") {
        img.src="dog.png";
        dog=dog+1;
       }

       else if(result[0].label=="Cat") {
        img.src="cat.png";
        cat=cat+1;
       }

       else if(result[0].label=="Lion") {
        img.src="lion.png";
       lion=lion+1;
       }

       else if(result[0].label=="Duck") {
        img.src="duck.png";
        duck=duck+1;
       }

       else {
        img.src="ear.png";
       }
    }
}