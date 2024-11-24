import dictionary from "./dictionary.js";

export const maketable = () => {
    const btnShow = document.getElementById('showWords');
    const table = document.querySelector('.table');

    const showtable = () => {
        table.style.display = "block";
        btnShow.textContent = "Ocultar tabla";
        btnShow.removeEventListener('click', showtable);
        btnShow.addEventListener('click', hidetable);
    }

    const hidetable = () => {
        table.style.display = "none";
        btnShow.textContent = "Mostrar tabla";
        btnShow.removeEventListener('click', hidetable);
        btnShow.addEventListener('click', showtable);
    }

    btnShow.addEventListener('click', showtable);

    const populateTable = (category, cleanTable = true) => {
        const table = document.querySelector('.tableWord');
        const tbody = table.querySelector('tbody');

        if (cleanTable) tbody.innerHTML = '';

        const items = dictionary.categories[category];

        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.english}</td>
                <td>${item.spanish}</td>
                <td>${item.example}</td>
            `;
            tbody.appendChild(row);
        });
    };

    const categoryButtons = document.querySelectorAll('.categoryButton');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            populateTable(category);
        });
    });

    const defaultTable = () => {
        const categories = Object.keys(dictionary.categories)
        categories.forEach((categorie => {
            populateTable(categorie, false)
        }))
    }
    defaultTable()
}