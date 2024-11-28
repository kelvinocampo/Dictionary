import dictionary from "./dictionary.js";

export const translate = () => {
    const $form = document.getElementById('translateForm');
    const $outputWord = document.getElementById('wordTranslate');
    const $outputExample = document.getElementById('exampleTranslate');

    const showOutput = (output, example) => {
        $outputWord.textContent = output || 'Traduccion no encontrada';
        $outputExample.textContent = example || 'Traduccion no encontrada';
    }

    const searchWord = (word, mode) => {
        const categories = Object.keys(dictionary.categories);
        let wordTranslate = 'Traduccion no encontrada';
        let example = 'Traduccion no encontrada';
        categories.forEach(category => {
            dictionary.categories[category].forEach(item => {
                if (item[mode].toLowerCase() === word.toLowerCase()) {
                    let resultMode = (mode === "english") ? "spanish" : "english";
                    example = item["example"];
                    wordTranslate = item[resultMode];
                }
            });
        });
        return [wordTranslate, example];
    }

    const translate = (e) => {
        e.preventDefault();

        const $word = document.getElementById('word');
        const $mode = document.getElementById('mode');

        const [output, example] = searchWord(($word.value).toLowerCase(), $mode.value);
        console.log(example);

        showOutput(output, example);
    }

    $form.onsubmit = translate;
}