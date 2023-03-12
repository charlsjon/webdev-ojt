document.querySelector('.music-icon').addEventListener('click', function(){
    var displayModal = document.querySelector('.modal');
    var addIcon = document.querySelector('.music-icon');
    if(displayModal.style.display == 'none'){
        displayModal.style.display = 'flex';
        addIcon.setAttribute('src', 'close-button.png')

    }else{
        displayModal.style.display = 'none';
        addIcon.setAttribute('src', 'addmusic.png')
    }
})

document.querySelector('.confirm-btn').addEventListener('.click', function(){
    var notesContainer = querySelector('.wrapper');
    var notes = document.createElement('div');
    var titleContainer = document.createElement('h2');
    var dateContainer = document.createElement('p');
    var descriptionContainer = document.createElement('p');
    var inputTitle = document.querySelector('#title').value;
    var inputDate = document.querySelector('#getDate').value;
    var inputDescription = document.querySelector('#desc').value;

    notesContainer.appendChild(notes).classlist.add('card');
    // var cardData = document.querySelector('.card');
    document.querySelector('.card').appendChild(titleContainer);
    titleContainer.innerHTML = inputTitle;
    document.querySelector('.card').appendChild(dateContainer);
    dateContainer.innerHTML = inputDate;
    document.querySelector('.card').appendChild(descriptionContainer);
    descriptionContainer.innerHTML = inputDescription;
    
})