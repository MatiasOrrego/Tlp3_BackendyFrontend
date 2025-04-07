
function enviarNombre(){
    const nombre = document.getElementById("nombre").value;
    fetch(`http://localhost:3000/saludo/${nombre}`)
    .then(response => response.text())
    .then(data => {
        document.getElementById("respuesta").innerText = data;
    })
    .then(() => {
        document.getElementById("enviar").addEventListener("click", enviarNombre);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}
export {enviarNombre}; // Exporta la función para que pueda ser utilizada en otros módulos