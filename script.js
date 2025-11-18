// Definimos un Array (la lista) que contiene 
// Objetos (los datos de cada proyecto).

const projects = [
    {
        name: "Digital Business Card", // Key:Value
        description: "My first deployed website using HTML, CSS, and Git.",
        technologies: ["HTML", "CSS", "Git", "GitHub Pages"],
        isFeatured: true
    },
    {
        name: "Dark Mode Toggle",
        description: "Implemented interactivity using JavaScript DOM manipulation.",
        technologies: ["JavaScript", "CSS", "DOM"],
        isFeatured: true
    }
];


// 1. Buscamos el contenedor donde inyectaremos el HTML usando su ID.
const projectsContainer = document.getElementById("projects-list");

// 2. Iteramos (recorremos) el Array de proyectos usando forEach
projects.forEach(project => {
    // 3. Por cada proyecto, construimos un bloque de HTML (Template Literal)
    //    Nota los símbolos `${}`: permiten inyectar variables JS dentro del string.
    const projectHTML = `
        <div class="project-item">
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <small>Tech: ${project.technologies.join(', ')}</small>
        </div>
        <hr> `;
    
    // 4. Inyectamos el HTML construido en el contenedor.
    //    El += es crucial: añade el nuevo proyecto al contenido existente.
    projectsContainer.innerHTML += projectHTML;
});


function toggleTheme() {
    // 1. Buscamos el elemento (el <body>) por su ID único.
    //    'document' es la página web entera.
    const body = document.getElementById("page-body");
    
    // 2. Aplicamos la magia: .classList.toggle()
    //    Esta función revisa si la clase "dark-mode" está aplicada.
    //    Si NO está, la AÑADE. Si YA está, la QUITA.
    body.classList.toggle("dark-mode");
    
    // ¡Bonus! Cambiaremos el mensaje de la consola para ver qué pasó
    if (body.classList.contains("dark-mode")) {
        console.log("Dark Mode ON. 🌙");
    } else {
        console.log("Dark Mode OFF. ☀️");
    }
}

// Deja el mensaje inicial para saber que el script carga
console.log("Script loaded! Ready to toggle theme.");