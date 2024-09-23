// Option 1: directly on html file


// Option 2: Add onclick function
function makeGreen(){
    document.body.style.backgroundColor='lightgreen';
}

// Option 3: 
const makeBlueButton = document.getElementById('make-blue')
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'lightblue'
        }

// Option 3: 
const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'plum'
        }

// function makeBlue(){
//     document.body.style.backgroundColor='lightblue';
// }