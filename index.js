const minute = 60 * 1000;
const tpp = minute * 5;  //time per person
let people = [
    'Marta_lightgreen',
    'Camilla_lightblue',
    'Peter_purple',
    'Poyan_pink'
];

const element = document.getElementById('name');
const buttons = document.getElementById('buttons');
const nexPersonSound = document.getElementById("nextPerson");
const endBreakSound = document.getElementById("endBreak");

const startButton = document.getElementById("start");


function shuffle(a) {
    for (let i = 0; i < a.length; i++) {
        const j = Math.floor(Math.random() * a.length); //random index j
        [a[i], a[j]] = [a[j], a[i]]; //switch
    }
    return a;
}

function start(counter) {
    console.log(element);
    if (counter < people.length) {
        const person_color = people[counter].split('_');
        let person = person_color[0];
        const color = person_color[1];
        element.innerHTML = person;
        document.title = person;
        document.body.style.background = color;
        document.body.style.backgroundImage = `url(img/${person.toLowerCase()}.jpg)`;
        console.log(`url(img/${person}.jpg)`);
        setTimeout(() => {
            counter++;
            nexPersonSound.play();
            start(counter);
        }, tpp);
    } else {
        element.innerHTML = 'Time for the break!!';
        document.title = 'Break!';
        document.body.style.background = 'white';
        buttons.style.display = 'block';
    }
}

function startANewRound() {
    people = shuffle(people);
    console.log(people);
    buttons.style.display = 'none';
    start(0);
}

buttons.addEventListener('click', e => {
    element.innerHTML = e.target.value + ' minutes break';
    buttons.style.display = 'none';
    setTimeout(() => {
        endBreakSound.play();
        element.innerHTML = 'Break is over!!';
        document.body.style.background = 'red';
        startButton.style.display = 'block';
    }, minute * e.target.value);

})

startButton.addEventListener('click', e => {
    startButton.style.display = 'none';
    document.body.style.background = 'white';
    startANewRound();
})


