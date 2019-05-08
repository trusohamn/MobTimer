const minute = 60 * 1000;
const tpp = minute * 5;  //time per person
let people = [
    //'Marta_lightgreen',
    'Camilla_lightblue',
    'Peter_purple',
    'Poyan_pink'
];

const element = document.getElementById('name');
const buttons = document.getElementById('buttons');

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function start(counter) {
    console.log(element);
    if (counter < people.length) {
        const person_color = people[counter].split('_');
        const person = person_color[0];
        const color = person_color[1];
        element.innerHTML = person;
        document.body.style.background = color;
        setTimeout(() => {
            counter++;
            start(counter);
        }, tpp);
    } else {
        element.innerHTML = 'Time for the break!!';
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
    setTimeout(() => {
        alert('The break is over!');
        startANewRound();
    }, minute*e.target.value);

})
startANewRound();
