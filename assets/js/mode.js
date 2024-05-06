

document.getElementById('btnSwitch').addEventListener('click', () => {
    const btnSwitch = document.getElementById('btnSwitch');
    const textInput = document.getElementById('textInput');
    const scrolBar = document.getElementById('card-container');

    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        btnSwitch.innerText = 'تم تیره';
        textInput.classList.remove('text-bg-dark');
        textInput.classList.add('text-bg-light');
        scrolBar.classList.remove('card-dark');
        scrolBar.classList.add('card-light');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        btnSwitch.innerText = 'تم روشن';
        textInput.classList.remove('text-bg-light');
        textInput.classList.add('text-bg-dark');
        scrolBar.classList.remove('card-light');
        scrolBar.classList.add('card-dark');
    }
})