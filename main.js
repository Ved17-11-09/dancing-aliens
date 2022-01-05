function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true}) ;
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json'
    ,modelReady) ;
}

function modelReady() {
    Classifier.classify(gotResults) ;
}

function gotResults(errors,results) {
    if (errors) {
        console.log(errors) ;
    } 
    else{
        console.log(results) ;
        document.getElementById("result").innerHTML = "I CAN HEAR...." + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "ACCURACY...." + (results[0].confidence*100).toFixed(2)+"%" ;

        img = document.getElementById("alien-1") ;
        img1 = document.getElementById("alien-2") ;
        img2 = document.getElementById("alien-3") ;
        img3 = document.getElementById("alien-4") ;

        if (results[0].label == "Clap") {
            img.src = "aliens-01.gif" ;
            img1.src = "aliens-02.png" ;
            img2.src = "aliens-03.png" ;
            img3.src = "aliens-04.png" ;
        }
        else if (results[0].label == "Snapping") {
            img.src = "aliens-01.png" ;
            img1.src = "aliens-02.gif" ;
            img2.src = "aliens-03.png" ;
            img3.src = "aliens-04.png" ;
        }
        else if (results[0].label == "Background Noice") {
            img.src = "aliens-01.png" ;
            img1.src = "aliens-02.png" ;
            img2.src = "aliens-03.gif" ;
            img3.src = "aliens-04.png" ;
        }
        else if (results[0].label == "Bell") {
            img.src = "aliens-01.png" ;
            img1.src = "aliens-02.png" ;
            img2.src = "aliens-03.png" ;
            img3.src = "aliens-04.gif" ;
        }
    }
}