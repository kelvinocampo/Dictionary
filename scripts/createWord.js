export const createWord = () => {
    const btnShowCreateWord = document.getElementById('createWord');
    const addWordButton = document.getElementById('addWordButton');
    const categorySelect = document.getElementById('categorySelect');
    const createWordSection = document.querySelector('.addWord');
    const tableBody = document.getElementById('tableBody');

    const showCreateWord = () => {
        createWordSection.style.display = 'flex';
        btnShowCreateWord.textContent = 'Cancelar';
        btnShowCreateWord.removeEventListener('click', showCreateWord);
        btnShowCreateWord.addEventListener('click', hideCreateWord);
    };

    const hideCreateWord = () => {
        createWordSection.style.display = 'none';
        btnShowCreateWord.textContent = 'Crear palabra';
        btnShowCreateWord.removeEventListener('click', hideCreateWord);
        btnShowCreateWord.addEventListener('click', showCreateWord);
    };

    const clearInputs = () => {
        document.getElementById('wordEnglish').value = '';
        document.getElementById('wordSpanish').value = '';
        document.getElementById('example').value = '';
    };

    btnShowCreateWord.addEventListener('click', showCreateWord);

    addWordButton.addEventListener('click', () => {
        const wordEnglish = document.getElementById('wordEnglish').value.trim();
        const wordSpanish = document.getElementById('wordSpanish').value.trim();
        const example = document.getElementById('example').value.trim();
        const category = categorySelect.value;

        if (wordEnglish && wordSpanish && example) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${wordEnglish}</td>
                <td>${wordSpanish}</td>
                <td>${example}</td>
            `;
            tableBody.appendChild(row);

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
    });
};