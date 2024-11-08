const draggables = document.querySelectorAll('.draggable');
const dropzone = document.querySelector('.dropzone');


//inicio do drag
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) =>{
        event.dataTransfer.setData('text/plain', event.target.id);
        draggable.classList.add('dragging');
        console.log('dragging');
    })
});

//fim do drag
draggables.forEach(draggable => {
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        console.log('dragend');
    })
});

//entra sobre o drop
dropzone.addEventListener('dragenter', (event) => {
    event.preventDefault();
    dropzone.classList.add('over');
    console.log('entrou na dropzone');
});

//sobre o drop
dropzone.addEventListener('dragover' , (event) => {
    event.preventDefault();
    console.log('sobre a dropzone');
});

//saiu da dropzone
dropzone.addEventListener('dragleave' , () => {
    dropzone.classList.remove('over');
    console.log('saiu da dragzone');
});


//soltou na área de drop
/*draggables.forEach(draggable => {
    draggable.getElementsByClassName('dragging') = {
        
    }
    dropzone.addEventListener('drop' , (event) => {
        event.preventDefault();
        dropzone.classList.remove('over');
        dropzone.appendChild(draggable);
        console.log('solto na dropzone')
    
    })
});*/

dropzone.addEventListener('drop' , (event) => {
    const draggable = document.querySelector('.dragging');
    event.preventDefault();
    dropzone.classList.remove('over');
    dropzone.appendChild(draggable);
    console.log('solto na dropzone')

})




