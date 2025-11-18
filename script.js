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