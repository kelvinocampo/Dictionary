import dictionary from "./dictionary.js";

export const maketable = () => {
    const btnShow = document.getElementById('showWords');
    const table = document.querySelector('.table');

    const showHideTable = () => {
        const display = table.style.display;
        table.style.display = (display === "block") ? "none" : "block";
    }

    btnShow.onclick = showHideTable;

    const populateTable = (category, order) => {
        const table = document.querySelector('.tableWord');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';

        const items = dictionary.categories[category];

        if (order) {
            items.sort((a, b) => {
                return order === 'asc' ? a.english.localeCompare(b.english) : b.english.localeCompare(a.english);
            });
        }

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
    const sortSelect = document.getElementById('sortSelect');

    let selectedCategory = categoryButtons[0].getAttribute('data-category');

    categoryButtons.forEach(button => {
        button.onclick = () => {
            selectedCategory = button.getAttribute('data-category');
            const order = sortSelect.value;
            populateTable(selectedCategory, order);
        };
    });
    
    sortSelect.onchange = () => {
        const order = sortSelect.value;
        populateTable(selectedCategory, order);
    };
    populateTable(selectedCategory, sortSelect.value);
}