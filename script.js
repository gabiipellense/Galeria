const draggables = document.querySelectorAll('.draggable');
const dropzone = document.querySelector('.dropzone');
const dropzoneBack = document.querySelector('.organiza');
var contadorFavoritos ; 
var contadorPrincipal = 6 ; 


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
dropzone.addEventListener('drop' , (event) => {
    const draggable = document.querySelector('.dragging');
    event.preventDefault();
    dropzone.classList.remove('over');
    dropzone.appendChild(draggable);
    console.log('solto na dropzone');
    contadorFavoritos++;
    contadorPrincipal-- ; 
});

//exclui
dropzone.addEventListener('click', (event) =>{
    event.target.remove();
    contadorFavoritos-- ; 
});

// ---------------------------------------------

//volta para área principal - entra sobre o 'drop'
dropzoneBack.addEventListener('dragenter' , (event) => {
    event.preventDefault();
    dropzoneBack.classList.add('over');
    console.log(dropzoneBack)
    console.log('voltou');
});

//volta para área principal - saiu sobre o 'drop'
dropzoneBack.addEventListener('dragover' , () => {
    dropzoneBack.classList.remove('over');
    console.log('sobre a dropzone inicial');
});

//volta para área principal - soltou sobre o 'drop'
dropzoneBack.addEventListener('drop' , (event) => {
    const draggable = document.querySelector('.dragging');
    event.preventDefault();
    dropzoneBack.classList.remove('over');
    dropzoneBack.appendChild(draggable);
    console('terminei');
    contadorPrincipal++ ; 
    contadorFavoritos-- ; 
});






