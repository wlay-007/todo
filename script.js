const inputTitle = document.querySelector('#name-input');
const inputDescription = document.querySelector('#description-input');
const button = document.querySelector('.main__accept-button');
const cardsPlace = document.querySelector('.main__todo-cards');
const lounch = document.querySelector('img')
let title = '';
let description = '';

inputTitle.addEventListener('input', ()=>{
    title = inputTitle.value; 
    console.log(title);
})
inputDescription.addEventListener('input', ()=>{
    description = inputDescription.value;
    console.log(description);
})
button.addEventListener('click', ()=>{
    if(title.length > 0 && description.length > 0){
        const card = document.createElement('div');
        const titleName = document.createElement('h1')
        const descriptionName = document.createElement('p')
        titleName.innerText = title;
        descriptionName.innerText = description;
        card.append(titleName, descriptionName);
        card.classList.add('main__todo-card');
        cardsPlace.append(card);
        inputTitle.value = '';
        inputDescription.value = '';
        description = '';
        title = '';
        lounch.classList.add('none');
    }
})
