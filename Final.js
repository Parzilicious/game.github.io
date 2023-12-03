    var selectedMode = "";
    var body = document.body.innerHTML;
    var styles = document.head.innerHTML;

    function selectMode(mode) {

      document.getElementById("specdiff").style.backgroundColor = "";
      document.getElementById("specdiff2").style.backgroundColor = "";
      document.getElementById("specdiff3").style.backgroundColor = "";

      selectedMode = mode;

      if (selectedMode === "easyMode") {
        document.getElementById("specdiff");
      } else if (selectedMode === "hardMode") {
        document.getElementById("specdiff2");
      } else if (selectedMode === "impoMode") {
        document.getElementById("specdiff3");
      }


      return;
    }

      function play(){

      document.getElementById('Homepage').style.display = 'none';
      var content = document.getElementById(selectedMode).innerHTML;
      document.body.innerHTML = content;
      var newStyles = `
          body {
            background: linear-gradient(180deg, #212529, #343a40, #495057, #212529);
             min-height: 100vh;
              font-family: 'Helvetica', sans-serif;
              display: flex;
            flex-direction: column;
            align-items: center;
          }

          button {
            padding: 1em;
            width: 400px;
            border-radius: 100px;
            margin: 5em 10px; 
            height: 80px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 25px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s; /* Add color transition */
            background-color: #212529;
            color: white;
            border: 2px solid white;
          }
          
          img {
            height: 400px;
            width: 800px;
            object-fit: contain;
            border: 2px solid white;
            border-radius: 5%;
          }

          h2 {
            font-size: 50px;
            font-family: Arial;
            color: white;
          }

          #easyMode button:not(#Home) {
            margin: 10px;
            }

            #Home {
            position: absolute;
            top: 10px;
            left: 10px;
            margin-top: 1em !important;
            }.button:hover, #Play:hover {
            background-color: black; 
            color: white; 
            }

            button:hover, .modes-container:hover {
            background-color: white; 
            color: black; 
            }

           

      `
      var styleElement = document.createElement('style');
      styleElement.innerHTML = newStyles;

      document.head.appendChild(styleElement);document.style.innerHTML = newStyles;

      }


      function home() {

      document.head.innerHTML = styles;
      document.body.innerHTML = body;

      }

    var randompicE;
    var ranchoice;
    
    function revealE(){
    randompic.style.display = "block";
    var pictureArray = [
            "https://i.pinimg.com/474x/4b/95/ed/4b95ede28bbf7b683caa79d6896599f8.jpg",
            "https://static.vecteezy.com/system/resources/previews/013/209/428/non_2x/simple-dog-silhouette-illustration-free-vector.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCkdsJhPt7iuj9VIfT9nEEsoLH7pHestHvw&usqp=CAU",
            "https://clipart-library.com/images/5cR9Axdca.jpg",
            "https://t3.ftcdn.net/jpg/02/89/76/76/360_F_289767655_HVfxlEKu6YwR9qBO6DOPB6sPwDha6UqD.jpg"
        ];

        var randomizer = Math.floor(Math.random() * pictureArray.length);
        var randompicE = document.getElementById("randompic");
        randompicE.src = pictureArray[randomizer];
        document.getElementById("revealer").style.display = "none";

        if(randomizer === 0){
           ranchoice = "Elephant";
        }
        else if (randomizer === 1){
           ranchoice = "Dog";
        }
        else if (randomizer === 2){   
           ranchoice = "Cat";        
        }
        else if (randomizer === 3){ 
           ranchoice = "Bird";          
        }
        else if (randomizer === 4){
           ranchoice = "Fish";
        }

        ChoicesE();
    }    var selectedMode = "";
    var body = document.body.innerHTML;
    var styles = document.head.innerHTML;

    function selectMode(mode) {

      document.getElementById("specdiff").style.backgroundColor = "";
      document.getElementById("specdiff2").style.backgroundColor = "";
      document.getElementById("specdiff3").style.backgroundColor = "";

      selectedMode = mode;

      if (selectedMode === "easyMode") {
        document.getElementById("specdiff").style.backgroundColor = "green";
      } else if (selectedMode === "hardMode") {
        document.getElementById("specdiff2").style.backgroundColor = "green";
      } else if (selectedMode === "impoMode") {
        document.getElementById("specdiff3").style.backgroundColor = "green";
      }


      return;
    }

   function play(){

      document.getElementById('Homepage').style.display = 'none';
      var content = document.getElementById(selectedMode).innerHTML;
      document.body.innerHTML = content;
      document.style.innerHTML = styles;

   }
    

    function home() {

      document.head.innerHTML = styles;
      document.body.innerHTML = body;

    }

    var randompicE;
    var ranchoice;
    
    function revealE(){
    randompic.style.display = "block";
    var pictureArray = [
            "https://i.pinimg.com/474x/4b/95/ed/4b95ede28bbf7b683caa79d6896599f8.jpg",
            "https://static.vecteezy.com/system/resources/previews/013/209/428/non_2x/simple-dog-silhouette-illustration-free-vector.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCkdsJhPt7iuj9VIfT9nEEsoLH7pHestHvw&usqp=CAU",
            "https://clipart-library.com/images/5cR9Axdca.jpg",
            "https://t3.ftcdn.net/jpg/02/89/76/76/360_F_289767655_HVfxlEKu6YwR9qBO6DOPB6sPwDha6UqD.jpg"
        ];

        var randomizer = Math.floor(Math.random() * pictureArray.length);
        var randompicE = document.getElementById("randompic");
        randompicE.src = pictureArray[randomizer];
        document.getElementById("revealer").style.display = "none";

        if(randomizer === 0){
           ranchoice = "Elephant";
        }
        else if (randomizer === 1){
           ranchoice = "Dog";
        }
        else if (randomizer === 2){   
           ranchoice = "Cat";        
        }
        else if (randomizer === 3){ 
           ranchoice = "Bird";          
        }
        else if (randomizer === 4){
           ranchoice = "Fish";
        }

        ChoicesE();
    }

    function revealH() {
    randompic.style.display = "block";
    var pictureArray = [
            "https://img.freepik.com/premium-vector/coloring-pages-books-kids-cute-worm-cartoon-black-white_50699-848.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg"
        ];

        var randomizer = Math.floor(Math.random() * pictureArray.length);
        var randompicE = document.getElementById("randompic");
        randompicE.src = pictureArray[randomizer];
        document.getElementById("revealer").style.display = "none";

        if(randomizer === 0){
           ranchoice = "Worm";
        }
        else if (randomizer === 1){
           ranchoice = "Worm";
        }
        else if (randomizer === 2){   
           ranchoice = "Worm";        
        }
        else if (randomizer === 3){ 
           ranchoice = "Worm";          
        }
        else if (randomizer === 4){
           ranchoice = "Worm";
        }

        ChoicesH();
      
    }

    function revealI() {
    randompic.style.display = "block";
    var pictureArray = [
            "https://img.freepik.com/premium-vector/coloring-pages-books-kids-cute-worm-cartoon-black-white_50699-848.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg",
            "https://thumbs.dreamstime.com/b/creative-quirky-line-drawing-cartoon-worm-original-151187049.jpg"
        ];

        var randomizer = Math.floor(Math.random() * pictureArray.length);
        var randompicE = document.getElementById("randompic");
        randompicE.src = pictureArray[randomizer];
        document.getElementById("revealer").style.display = "none";

        if(randomizer === 0){
           ranchoice = "Worm";
        }
        else if (randomizer === 1){
           ranchoice = "Worm";
        }
        else if (randomizer === 2){   
           ranchoice = "Worm";        
        }
        else if (randomizer === 3){ 
           ranchoice = "Worm";          
        }
        else if (randomizer === 4){
           ranchoice = "Worm";
        }

        ChoicesI(); 
    }

    function randomizer(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function ChoicesE() {
        var choices = ["Worm", "Dog", "Cat", "Bird", "Fish", "Elephant", "Lion", "Tiger", "Horse", "Monkey"];

        var disable = choices.filter(choice => choice !==ranchoice);

        var choice2 = randomizer(choices);

        choice2 = choices.slice(0,2);
        if(choice2 === "randchoice"){
            randomizer(choices)
        }

        var choice3 = [...choice2, ranchoice];

        choice3 = randomizer(choice3);
 
        document.getElementById("choice1").innerHTML = choice3[0];
        document.getElementById("choice2").innerHTML = choice3[1];
        document.getElementById("choice3").innerHTML = choice3[2];

    }

    function checkAnswer(each){

        var choice = document.getElementById("choice" + each).innerHTML;

        if(choice === ranchoice){
            alert("Yes");
        } else{
            alert("No");
        }
    }


