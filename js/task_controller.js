import { task } from "./task_model.js";

//Variables para el input y boton 
const input            = document.getElementById('form__input');
const form__button     = document.getElementById('form__button');


//variables para el modal
const modalInformation = document.getElementById('modal');
const txtModal         = document.getElementById('modal__text');
const closeModal       = document.getElementById('close__modal');


//Variables para la lista
const list__card       = document.getElementById('list__card');

//Instanciar la clase
const tareas = new task;

//Función para el title de la página
tareas.obtenerTitlePage();

//Escuchar el evento del botón agregar tarea
form__button.addEventListener('click', ()=>{
    tareas.validalityInput(event,input,modalInformation, txtModal,list__card);
});

//Escuchar el evento click del contenedor modal para cerrar
closeModal.addEventListener('click',()=>{
    tareas.closeModalInformation(modalInformation);
});






