export const makeList = () => {
    const btnShow = document.getElementById('showWords');
    const list = document.querySelector('.list');

    const showList = () => {
        console.log("Showing list");
        list.style.display = "flex"; 
        btnShow.onclick = hideList;   
    }

    const hideList = () => {
        console.log("Hiding list");
        list.style.display = "none"; 
        btnShow.onclick = showList;  
    }

    btnShow.onclick = showList;
}

