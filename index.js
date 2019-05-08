const tpp = 5 * 60 * 1000 ;
let people = [
    'Marta_green',
    'Camilla_blue',
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

function start(counter) {
    const element = document.getElementById('name');
    console.log(element);
    if (counter < people.length) {
        let person_color = people[counter];
        let person = person_color.split('_')[0];
        let color = person_color.split('_')[1];
        element.innerHTML = person;
        element.style.background = color;
        setTimeout(function () {
            counter++;
            start(counter);
        }, tpp);
    }
}

people = shuffle(people);
console.log(people);
start(0);
