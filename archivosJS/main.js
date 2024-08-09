//llamado a un nodo del DOM
let root = document.querySelector("#root");

// Check if root exists
if (!root) {
    console.error('Element with id "root" not found.');
}

//elemento de tipo div con un atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//lista de textos
let formularios = [
    {nombre: "login", link: "componentes/login/login.html"},
    {nombre: "Formulario De Contacto", link: "componentes/FormularioDeContacto/indexDeContacto.html"},
    {nombre: "Formulario De Registro", link: "componentes/FormularioDeRegistro/registro.html"},
    {nombre: "formulario De Búsqueda", link: "componentes/ForumularioDEBusqueda/FomularioDeBus.html"},
    {nombre: "Formulario De Pedido Compras", link: "componentes/formularioDePeriodosDeCompras/periodosDeCompras.html"},
    {nombre: "formulario De Comentarios Resenas", link: "componentes/FormularioDeComentariosResenas/indexComentariosResena.html"}
];

//forEach (for)
formularios.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "div-item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);
