let fs = require('fs');
let data = {
    "home": {
        "estilosEspesificos": function () {
            let slider = fs.readFileSync('../css/recomendados.css').toString();
            return `           
            ${slider}
            `;
        },
        "contenidoPagina": function () {
            let doc = fs.readFileSync('../html/recomendados.html').toString();
            let tabs = "";
            let datos = JSON.parse(fs.readFileSync('../data/libros.json', {encoding: 'utf-8'}));
            datos.comics.forEach((libro) => {

                if (libro.recomendado) {
                    tabs += `
                    <div class="flip_card_container ">
                <div class="flip_card_sub_container">

                    <div class="flip_card_front">
                        <img src=${libro.caratula} alt="Avatar"
                             style="width:250px;height:300px;">
                    </div>
                    <div class="flip_card_back">
                        <h1>${libro.Titulo}</h1>
                        <p class="cardProfesion">${libro.Genero}</p>
                        <p>${libro.sinopsis}
                        </p><br><br><br>                   
                    </div>
                </div>
            </div>
             `
                }
            });
            doc = remplaceContent(doc, {
                "titulo": `<h1 style="text-align: center; font-family: 'Komika Axis', arial;"> Recomendados </h1>`,
                "tarjetas": tabs
            });
            return doc;
        },
    },
    "recomendados": {
        "estilosEspesificos": function () {
            return fs.readFileSync('../css/recomendados.css').toString();
        },
        "contenidoPagina": function () {
            let doc = fs.readFileSync('../html/recomendados.html').toString();
            let tabs = "";
            let datos = JSON.parse(fs.readFileSync('../data/libros.json', {encoding: 'utf-8'}));

            console.log(datos.comics.length);

            var nana = 0;
            datos.comics.forEach((libro) => {

                if (libro.recomendado) {
                    nana++;
                    tabs += `
                    <div class="flip_card_container ">
                <div class="flip_card_sub_container">

                    <div class="flip_card_front">
                        <img src=${libro.caratula} alt="Avatar"
                             style="width:250px;height:300px;">
                    </div>
                    <div class="flip_card_back">
                        <h1>${libro.Titulo}</h1>
                        <p class="cardProfesion">${libro.Genero}</p>
                        <p>${libro.sinopsis}
                        </p><br><br><br>                   
                    </div>
                </div>
            </div>
             `
                }

              
            
            });
            doc = remplaceContent(doc, {
                "titulo": `<h1 style="text-align: center; font-family: 'Komika Axis', arial;"> Recomendados </h1>`,
                "tarjetas": tabs
            });
            return doc;
        },
    },
    "contenido": {
        "estilosEspesificos": function () {
            return fs.readFileSync('../css/recomendados.css').toString();
        },
        "contenidoPagina": function () {
            let doc = fs.readFileSync('../html/recomendados.html').toString();
            let tabs = "";
            let datos = JSON.parse(fs.readFileSync('../data/libros.json', {encoding: 'utf-8'}));

            datos.comics.forEach((libro) => {
                tabs += `
                    <div class="flip_card_container ">
                        <div class="flip_card_sub_container">
                        <div class="flip_card_front">   
                        <img src=${libro.caratula} alt="Avatar"
                             style="width:250px;height:300px;">
                    </div>
                    <div class="flip_card_back">
                        <h1>${libro.Titulo}</h1>
                        <p class="cardProfesion">${libro.Genero}</p>
                        <p>${libro.sinopsis}
                        </p><br><br><br>                   
                    </div>
                </div>
            </div>
             `
            });

            doc = remplaceContent(doc, {
                "titulo": `<h1 style="text-align: center; font-family: 'Komika Axis', arial;"> Contenido </h1>`,
                "tarjetas": tabs
            });
            return doc;
        },
    },
    "eventos": {
        "estilosEspesificos": function () {
            return fs.readFileSync('../css/eventos.css').toString();
        },
        "contenidoPagina": function () {
            return fs.readFileSync('../html/eventos.html').toString();
        }
    },
    
    "busqueda": {
        "estilosEspesificos": function () {
            return fs.readFileSync('../css/recomendados.css').toString();
        },
        "contenidoPagina": function () {
            let doc = fs.readFileSync('../html/busqueda.html').toString();
            let tabs = "";
            let datos = JSON.parse(fs.readFileSync('../data/libros.json', {encoding: 'utf-8'}));

            console.log(datos.comics.length);

            var nana = 0;
            datos.comics.forEach((libro) => {

                if (libro.recomendado) {
                    nana++;
                    tabs += `
                    <div class="flip_card_container ">
                <div class="flip_card_sub_container">

                    <div class="flip_card_front">
                        <img src=${libro.caratula} alt="Avatar"
                             style="width:250px;height:300px;">
                    </div>
                    <div class="flip_card_back">
                        <h1>${libro.Titulo}</h1>
                        <p class="cardProfesion">${libro.Genero}</p>
                        <p>${libro.sinopsis}
                        </p><br><br><br>                   
                    </div>
                </div>
            </div>
             `}
            });

            doc = remplaceContent(doc, {
                "titulo": `<h1 style="text-align: center; font-family: 'Komika Axis', arial;"> Contenido </h1>`,
                "tarjetas": tabs
            });
            return doc;
        },
    },
    "jsonLibros": {
        "contenidoPagina": function () {
            return fs.readFileSync('../data/libros.json');
        }
    }
}

function remplaceContent(file, data) {
    let htmlTexto = file,
        cambios = file.match(/[^\{\{\}\}]+(?=\}\})/g);
    console.log(cambios);
    if (cambios != null) {
        cambios.forEach((cambio) => {
            htmlTexto = htmlTexto.replace(`{{${cambio}}}`, data[cambio]);
        });
        return htmlTexto;
    }
}


module.exports.data = data