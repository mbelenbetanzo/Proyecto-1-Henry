
// CLASE ACTIVITY //
class Activity {
    constructor({id,title,description,imgUrl}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

// CLASE REPOSITORY //

class Repository {
    constructor() {
        this.activities = []; // Un arreglo para almacenar las actividades.
        this.porId = 1; // Inicializamos un contador para los IDs.
    }

    getAllActivities() { // Retorna un arreglo con todas las actividades.
        return this.activities;
    }
      
    createActivity(title, description, imgUrl) { // Crea una instancia de Activity y la almacena en el arreglo.
        const activity = new Activity({id: this.porId++, title, description, imgUrl}); //,
        this.activities.push(activity);   
    }
    deleteActivity(id) {
        this.activities  = this.activities.filter((item) => item.id !== id);
    }
}

const repo = new Repository();
//repo.createActivity("Cocinar", "Me gusta mucho cocinar platos dulces", "www.ejemplo.com/correr.jpg");

const activity = new Activity({
    id: 1,
    title: "correr",
    description:"correr 2k por dia",
    imgUrl: "www.#.com"})

// ACTIVIDAD 2: funcion punto uno, recibir por parametro la instancia de actividad
const form = document.getElementById("form");
const container = document.getElementById("container");
const boton = document.querySelector(".section__btn");

const instancia = (activity) => {
    const { title, description, imgUrl } = activity;
    const card = document.createElement("div");
    const titulo = document.createElement("h3")
    const descripcion = document.createElement("p");
    const imagen = document.createElement("img");
    titulo.innerText = title;
    descripcion.innerText = description;
    imagen.src = imgUrl;
    card.classList.add("card");
    titulo.classList.add("titulo")
    descripcion.classList.add("descripcion")
    imagen.classList.add("imagen")
    card.appendChild(titulo)
    card.appendChild(descripcion)
    card.appendChild(imagen)
    return card;
}

//ACTIVIDAD 3

const agregarContenedor = () => {
    container.innerHTML = "";
    const actividades = repo.getAllActivities();
    //console.log(actividades)
    const elementoshtml = actividades.map((actividad) => instancia(actividad)); //instancia de la actividad
    //console.log(elementoshtml);
    elementoshtml.forEach((elemento) => {
        container.appendChild(elemento)
    //console.log(elemento);
    })};

//ACTIVIDAD 4

const handler = () => {
const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputImg = document.getElementById("inputUrl");

const inputTitulo = inputTitle.value;
const inputDescripcion = inputDescription.value;
const inputimg= inputImg.value;

if (!inputTitulo || !inputDescripcion || !inputImg) {
    return alert("No completaste todos los campos requeridos!");
}

repo.createActivity(inputTitulo, inputDescripcion, inputimg);

agregarContenedor();

inputTitle.value = "";
inputDescription.value = "";
inputImg.value = "";
}

const texto = document.querySelector(".section__p");

 boton.addEventListener("click", (e) => {
    e.preventDefault();
    texto.style.display = "none";
    handler()
 });

 

/*

 */







