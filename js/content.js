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

                $(document).ready(function(){
                    $.ajaxSetup({ cache: false });//cache= no guarda cache en el navegador
                    $('#search').keyup(function(){//keyup reconoce al oprimir una tecla
                    $('#result').html('');//imprime en html
                    $('#state').val('');//atrapa el valor
                        var campoBusqueda = $('#search').val();
                        var expression = new RegExp(campoBusqueda, "i");//"i" busqueda no sensitiva
                        $.getJSON('../data/libros.json', function(data) {//cambiar users.json por el archivo json deseado
                            $.each(data.comics, function(key, value){
                                if (value.Titulo.search(expression) != -1 || value.precio.search(expression) != -1)//cambiar value.nombre por value.autor, cambiar value.libro por la variable del json
                                {/*la linea inferior muestra los resultados en orden*/
                                    var tagLi = document.getElementsByTagName("li")
                                    console.log(value.Titulo)
                                    console.log("Se encontraron " + (tagLi.length + 1) + " resultados")
                                    var tag = document.getElementById("result")
                                    var li = document.createElement("li");
                                    li.setAttribute("id", key)
                                    li.setAttribute("onclick", "tomarDato(this.id)")
                                    li.setAttribute("class", "list-group-item link-class")
                                    var contenidoDiv = document.createTextNode(value.Titulo+ ' || ' + ' $' +value.precio );
                                    li.appendChild(contenidoDiv);
                                    tag.appendChild(li);
            
                                    // $('#result').append('<li id=key onclick="tomarDato(this.id)" class="list-group-item link-class">' +
                                    //     '<img src="'+ value.link +'" height="40" width="40" class="img-thumbnail" /> '+ value.caratula +' | <span class="text-muted">'+value.precio+'</span></li>');
                                }
                            });
                        });
                    });
                });
            
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