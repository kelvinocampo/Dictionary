import { createWord } from "./createWord.js";
import { maketable } from "./makeTable.js";
import { translate } from "./translate.js";

window.addEventListener('DOMContentLoaded', () => {
    maketable()
    translate()
    createWord()
});