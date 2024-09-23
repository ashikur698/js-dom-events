// Option 1: directly on html file
// <button onclick="console.log(65)">Another Button</button>


// Option 2: Add onclick function on the html element
// IMPORTANT: We'll use this
// <button onclick="makeGreen()">Make Green</button>

function makeGreen(){
    document.body.style.backgroundColor='lightgreen';
}

// Option 3: 
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue(){
document.body.style.backgroundColor = 'lightblue'
}

// Option 3: another [We'll use this sometime]
const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'plum'
        }
// Option 4:
const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink)
        function makePink(){
            document.body.style.backgroundColor = 'lightpink'
        }
// Option 4: another
// IMPORTANT: We'll use this sometime
const makeRedish = document.getElementById('make-reddish');
        makeRedish.addEventListener('click', function makeReddish(){
            document.body.style.backgroundColor = 'salmon';
        })
// Option 4: Final
// document.getElementById('make-golden').addEventListener('click', function(){});
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
});

// function makeBlue(){
//     document.body.style.backgroundColor='lightblue';
// }