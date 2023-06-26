

export class task{

    constructor(){

    }

    //Función para obtener el título de la página

    obtenerTitlePage() {

        let titlePage = document.title;

        window.addEventListener('blur', ()=>{
            titlePage = document.title;
            document.title = "😉¡Regresa pronto!";
        });

        window.addEventListener('focus', ()=>{
            document.title = titlePage;
        })
        
    }

    //Función para el modal information
    
    modalInformation(modal,txtModal,mensaje){

        modal.classList.add('modal__show');
        txtModal.innerHTML = mensaje;
    
    }


    //Función para cerrar el modal information

    closeModalInformation(modal,button){
        modal.classList.remove('modal__show');
    }


    //Función para validar el input
    validalityInput(event,input,modal,txtModal,list__card){
        event.preventDefault();
        let datoIngresado = input.value;
        const lista = list__card;

        if(datoIngresado === ''){

            this.modalInformation(modal,txtModal, "¡Debes ingresar una tarea!.");

        }else{
            this.modalInformation(modal,txtModal,"¡Ha ingresado una tarea <br> correctamente!.");
            this.createTask(lista,datoIngresado, modal,txtModal);

            input.value = "";
            input.focus();
            
            
        }

    }

    //Función para crear el elemento li
    elementLi(){
        const elementLi = document.createElement('li');
        elementLi.classList.add('item__card');
        return elementLi;
    }

    //Función para craer el elemento div
    elementDiv(){
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('content__task')
        return elementDiv;
    }

    //Función para craer el elemento div del contenedor de los icons
    elementDivIcons(){
        const elementDivIcons = document.createElement('div');
        elementDivIcons.classList.add('content__task--icons');
        return elementDivIcons;
    }

    //Función para crear el elemento span
    elementSpan(datoIngresado){

        const elementoSpan = document.createElement('span');
        elementoSpan.classList.add('task');
        elementoSpan.innerText = datoIngresado;

        return elementoSpan;
    }

    //Función para craer el elemento i icon edit
    elementIconEdit(elementSpan){
        const elementIconEdit = document.createElement('i');
        elementIconEdit.classList.add('bi', 'bi-pencil-square');

        elementIconEdit.addEventListener('click', ()=>{
            const datoEdit = prompt("Ingrese la nueva tarea");
            elementSpan.innerHTML = datoEdit;
        })
        return elementIconEdit;
    }

    //Función para crear el elemento i icon trash
    elementIconTrash(elementLi, elementoSpan, modal,txtModal){

        const elementIconTrash = document.createElement('i');
        elementIconTrash.classList.add('bi', 'bi-trash');

        //Escuchar el evento click del iconTrash
        elementIconTrash.addEventListener('click', ()=>{

            const elementoMostrar = elementoSpan.innerHTML;
            this.modalInformation(modal,txtModal, `Elemento a eliminar <br> ${elementoMostrar}`);
            console.log(elementLi);
            elementLi.remove();
            
            
        })
        return elementIconTrash;

    }


    //Función inyectar al padre

    inyectarElementoParent(parent,hijo){

        parent.appendChild(hijo);

    }

    //Función para crear la task o tarea
    createTask(lista,datoIngresado,modal,txtModal){

        const listaItem = lista;

        //Llamando la función del elemento li
        const elementLi = this.elementLi();

        //Inyectar al padre ul el elemento o hijo li
        this.inyectarElementoParent(listaItem,elementLi);

        //Llamando la función del elemento div
        const elementDiv = this.elementDiv();

        //Inyectar al padre li el elemento o hijo div
        this.inyectarElementoParent(elementLi,elementDiv);

        //Llamando la función del elemento span
        const elementoSpan = this.elementSpan(datoIngresado);

        //Inyectar al padre div el elemento o hijo span
        this.inyectarElementoParent(elementDiv,elementoSpan);

        //Llamando la función del elemento div del contendor de los icons
        const elementDivIcons = this.elementDivIcons();

        //Inyectar al padre div el elemento o hijo div de los icons
        this.inyectarElementoParent(elementDiv,elementDivIcons);

        //Llamando la función del elemento iconEdit
        const elementIconEdit = this.elementIconEdit(elementoSpan);

        //Inyectar al padre div el elemento o hijo i IconEdit
        this.inyectarElementoParent(elementDivIcons,elementIconEdit);
        
        //Llamando la función del elemento iconTrash
        const elementIconTrash = this.elementIconTrash(elementLi, elementoSpan,modal,txtModal);

        //Inyectar al padre div el elemento o hijo i IconTrash
        this.inyectarElementoParent(elementDivIcons,elementIconTrash);

        console.log(listaItem);
        
    }


}
