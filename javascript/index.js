const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.getElementById("papelera");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", (event) => {
        parrafo.classList.add("dragging");
        console.log("parrafo");
        console.log(parrafo.innerHTML);
        event.dataTransfer.setData("id", parrafo.id);
    });
    parrafo.addEventListener("dragend", () => {
        console.log("fin parrafo");
        console.log(parrafo.innerHTML);
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault(); 
    });
    seccion.addEventListener("drop", (event) => {
        const idParrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(idParrafo);
        console.log("drop");
        seccion.append(parrafo); 
    });
});
papelera.addEventListener("dragover", (event) => {
    event.preventDefault(); 
});
papelera.addEventListener("drop", event =>{
    const idParrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(idParrafo);
    
    parrafo.remove();
    console.log(`${idParrafo} eliminado`);
});