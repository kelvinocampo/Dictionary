import dictionary from "./dictionary.js";

const $form = document.getElementById('translateForm');
const $output = document.querySelector('.output p span');

function showOutput(output) {
    $output.textContent = output || 'Traduccion no encontrada';
}

function searchWord(word, mode) {
    const categories = Object.keys(dictionary.categories);
    let wordTranslate = 'Traduccion no encontrada';
    categories.forEach(category => {
        dictionary.categories[category].forEach(item => {
            if (item[mode].toLowerCase() === word) {
                let resultMode = (mode === "english") ? "spanish" : "english";
                wordTranslate = item[resultMode];
            }
            console.log(item[mode], word);
        });
    });
    return wordTranslate;
}

function translate(e) {
    e.preventDefault();

    const $word = document.getElementById('word');
    const $mode = document.getElementById('mode');

    const output = searchWord(($word.value).toLowerCase(), $mode.value);

    showOutput(output);
}

$form.onsubmit = translate;
