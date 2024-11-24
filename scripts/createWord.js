import dictionary from "./dictionary.js";

export const createWord = () => {
    const btnShowCreateWord = document.getElementById('createWord');
    const addWordButton = document.getElementById('addWordButton');
    const categorySelect = document.getElementById('categorySelect');
    const createWordSection = document.querySelector('.addWord');
    const tableBody = document.getElementById('tableBody');

    const showHideCreateWord = () => {
        const display = createWordSection.style.display
        const textContent = btnShowCreateWord.textContent
        createWordSection.style.display = (display === "flex") ? "none" : "flex";
        btnShowCreateWord.textContent = (textContent === "Cancelar") ? "Crear palabra" : "Cancelar";
    }

    const clearInputs = () => {
        document.getElementById('wordEnglish').value = '';
        document.getElementById('wordSpanish').value = '';
        document.getElementById('example').value = '';
    };

    btnShowCreateWord.onclick = showHideCreateWord;

    addWordButton.onclick = () => {
        const wordEnglish = document.getElementById('wordEnglish').value.trim();
        const wordSpanish = document.getElementById('wordSpanish').value.trim();
        const example = document.getElementById('example').value.trim();
        const category = document.getElementById('categorySelect').value;

        if (wordEnglish && wordSpanish && example) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${wordEnglish}</td>
                <td>${wordSpanish}</td>
                <td>${example}</td>
            `;
            console.log(dictionary.categories[category]);
            
            const word = {
                "id": dictionary.categories[category].length,
                "english": wordEnglish,
                "spanish": wordSpanish,
                "example": example
            }
            tableBody.appendChild(row);
            dictionary.categories[category].push(word)

            clearInputs();

            Swal.fire({
                title: 'Exito!',
                text: 'Palabra agregada en la categoría: ' + category,
                icon: 'success',
                confirmButtonText: 'Seguir'
            })
            return;
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Completa todos los campos',
                icon: 'error',
                confirmButtonText: 'Seguir'
            })
            return;
        }
    }
};