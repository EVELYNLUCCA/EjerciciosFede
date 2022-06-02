let yo = {
nombre: "Evelyn",
apellido: "Lucca",
edad: 39,
seriesYPeliculasFavoritas:["La casa de papel", "Anne whith an E", "Los simuladores", "Merlí", "Sexto sentido"],
conocimientosEnProgramación: ["html", "css", "sass", "Phyton"],
programar: function programar(){
    console.log("Mira como te programo Facebook 2");
}
}

document.write(`Soy ${yo.nombre} ${yo.apellido}, de ${yo.edad} años. Me encantó la serie "${yo.seriesYPeliculasFavoritas[0]}" y  mi lenguaje favorito es: "${yo.conocimientosEnProgramación[3]}".`)

yo.programar();

let frontEnd = {
    html: "html 5",
    estilo: "css 3",
    lenguaje: "JavaScript",
    framework: "Angular",
}

let favoriteTecnology = frontEnd.estilo;

switch (favoriteTecnology) {
    case "html 5": 
        console.log("Me gusta el maquetado")
        break;
    case "css 3": 
        console.log("Me gusta el estilo")
        break;
    case "JavaScript": 
        console.log("Me gusta la programación")
        break;
    case "Angular": 
        console.log("Me gustan el FrontEnd")
    default: 
        console.log("Me gusta el Backend")
        break;
}


