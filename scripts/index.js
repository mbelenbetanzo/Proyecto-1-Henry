
// CLASE ACTIVITY //

class Activity {
    constructor(id,title,description,imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

const activity = new Activity(1,"correr","correr 2k por dia","www.#.com")
console.log(activity);

// CLASE REPOSITORY //

class Repository {
    constructor() {
        this.activities = []; // Un arreglo para almacenar las actividades.
        this.nextId = 1; // Inicializamos un contador para los IDs.
    }

    getAllActivities() { // Retorna un arreglo con todas las actividades.
        return this.activities;
    }
      
    createActivity(title, description, imgUrl) { // Crea una instancia de Activity y la almacena en el arreglo.
        const activity = new Activity(this.nextId++, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((item) => item.id !== id);
    }
}

const repo = new Repository();

// Usar los métodos de la instancia repo
repo.createActivity("correr", "hacer ejercicio", "www.ejemplo.com/correr.jpg");

console.log(repo.getAllActivities());
// [{ id: 1, title: "correr", description: "hacer ejercicio", imgUrl: "www.ejemplo.com/correr.jpg" },
//  { id: 2, title: "holi", description: "celebración de colores", imgUrl: "www.ejemplo.com/holi.jpg" }]


repo.deleteActivity(1);
console.log(repo.getAllActivities());
// [{ id: 2, title: "holi", description: "celebración de colores", imgUrl: "www.ejemplo.com/holi.jpg" },
//  { id: 3, title: "leer", description: "leer un libro", imgUrl: "www.ejemplo.com/leer.jpg" }]











