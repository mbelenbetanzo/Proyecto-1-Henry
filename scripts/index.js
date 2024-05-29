
//llamar a elementos del dom

const form = document.getElementById("form");
const container = document.getElementById("container");

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
        const activity = new Activity(title, description, imgUrl); //this.porId++,
        this.activities.push(activity);
        this.porId++
    }
    deleteActivity(id) {
        this.activities  = this.activities.filter((item) => item.id !== id);
    }
}

const repo = new Repository();
repo.createActivity("correr", "hacer ejercicio", "www.ejemplo.com/correr.jpg");

const activity = new Activity({
    id: 1,
    title: "correr",
    description:"correr 2k por dia",
    imgUrl: "www.#.com"})

//funcion punto uno, recibir por parametro la instancia de actividad
const convertirHtml = (activity) => {
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












