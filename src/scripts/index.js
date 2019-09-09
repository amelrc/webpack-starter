import '../styles/index.scss';

console.log('webpack starterkit');


const button = document.querySelector('.button');

button.addEventListener('click', () => {
    console.log('button clicked');
});

let checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => checked());
});

const checked = () => {
    let checked = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            checked += 1;
        }
        if (checked > 4){
            alert('Four Dips Please');
            checkboxes[i].checked = false;
            return false;
        }  
    }
};


