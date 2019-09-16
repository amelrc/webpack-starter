import '../styles/index.scss';

console.log('webpack starterkit');

let checkboxes = document.querySelectorAll('.checkbox');
const button = document.querySelector('.button');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (el) => {
        const classTarget = el.target.parentNode.children[0].classList;
        let checked = 0;
        (el.target.checked) ? classTarget.remove('hidden') : classTarget.add('hidden');
        checkboxes.forEach(checkbox => (checkbox.checked) ? checked ++ : '');
        (checked > 4) ? (
            el.target.checked = false,
            classTarget.add('hidden')) :
            '';
    });
});

button.addEventListener('click', () => checkboxes.forEach(checkbox => (checkbox.checked) ? labelChecker() : ''));

const labelChecker = () => {
    const labels = document.querySelectorAll('.label');
    for(let label of labels) {
        (label.lastElementChild.checked == false) ? label.parentElement.classList.add('hidden') : '';
    }
};