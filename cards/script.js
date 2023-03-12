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
    vat notes = document.createElement('div');
    
})