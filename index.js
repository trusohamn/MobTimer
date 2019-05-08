const tpp = 5 * 60 ;
let people = [
    //'Marta_lightgreen',
    'Camilla_lightblue',
    'Peter_purple',
    'Poyan_pink'
];

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

const element = document.getElementById('name');
function start(counter) {
    console.log(element);
    if (counter < people.length) {
        let person_color = people[counter];
        let person = person_color.split('_')[0];
        let color = person_color.split('_')[1];
        element.innerHTML = person;
        document.body.style.background = color;
        setTimeout(function () {
            counter++;
            start(counter);
        }, tpp);
    } else {
        element.innerHTML = 'Time for the break!!';
        document.body.style.background = 'white';
    }
}

people = shuffle(people);
console.log(people);
start(0);

