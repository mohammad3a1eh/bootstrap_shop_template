const discripton = document.getElementById('description');
const info = document.getElementById('info');
const comment = document.getElementById('comment');
const question = document.getElementById('question');

document.getElementById('discripton_e').addEventListener('click', () => {
    if (discripton.getAttribute('class') == 'collapse mt-5') {
        info.classList.add('show');
    } else {
        info.classList.remove('show');
    }
})