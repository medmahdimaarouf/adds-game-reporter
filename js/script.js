function report() {
    $('table').report({
        title: "Rapport de jeux Babalino",
        reports: [{
            title: "Tunisie telecome (TT)",
            filter: (row) => {
                return String(row[2]).trim().startsWith('9');
            }
        },
        {
            title: "Ooredoo",
            filter: (row) => {
                return String(row[2]).trim().startsWith('2');
            }
        },
        {
            title: "Orange",
            filter: (row) => {
                return String(row[2]).trim().startsWith('5');
            }
        }
        ]
    });
}

let firstNames = [
    "Sana",
    "Hela",
    "Mahdi",
    "Amir",
    "Karim",
    "Ahmed",
    "Zyied",
    "Amine",
    "Yessine",
    "Aymen"
]
let lastNames = [
    "Sammoud",
    "Maarouf",
    "Ben Hsine",
    "BouAfif",
    "Tayari",
    "Khouja",
    "horri",
    "Ben ahmed",
    "Ksila",
    "belhween"
]
let operators = [2, 5, 9, 4, 7];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateTel() {
    let tel = [String(operators[randomNumber(0, operators.length - 1)]).concat(randomNumber(0, 9)), randomNumber(100, 999), randomNumber(100, 999)];
    return tel.join(' ');
}

function generateRow() {
    return [firstNames[randomNumber(0, firstNames.length - 1)], lastNames[randomNumber(0, lastNames.length - 1)], generateTel(), "Bienvenu au jeu babalouni !!", randomNumber(1000000, 9999999)];
}

$(document).ready(function () {
    for (var r = 0; r < 1000; r++) {
        let row = generateRow();
        $('tbody').append(`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td></tr>`)
    }
});