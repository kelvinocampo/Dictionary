import dictionary from "./dictionary.js";

export const maketable = () => {
    const btnShow = document.getElementById('showWords');
    const table = document.querySelector('.table');

    const showHideTable = () => {
        const display = table.style.display;
        const textContent = btnShow.textContent;
        table.style.display = (display === "block") ? "none" : "block";
        btnShow.textContent = (textContent === "Ocultar tabla") ? "Mostrar tabla" : "Ocultar tabla";
    }

    btnShow.onclick = showHideTable;

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
        button.onclick = () => {
            const category = button.getAttribute('data-category');
            populateTable(category);
        };
    });

    const defaultTable = () => {
        const categories = Object.keys(dictionary.categories);
        categories.forEach((categorie => {
            populateTable(categorie, false)
        }))
    }
    defaultTable()
}