const http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url'),
    events = require('events').EventEmitter;
contenido = require('./content.js').data;

eventos = new events();

http.createServer((request, response) => {
    let htmlContent = "";

    let urlPath = path.basename(url.parse(request.url).pathname);

    switch (urlPath) {
        case "":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.home);
                response.write(htmlContent);
                response.end();
            });
            break;
        case "contenido":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.contenido);
                response.write(htmlContent);
                response.end();
            });
            break;
        case "eventos":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.eventos);
                response.write(htmlContent);
                response.end();
            });
            break;

        case "recomendados":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.recomendados);
                response.write(htmlContent);
                response.end();
            });
            break;
        case "busqueda":
            fs.readFile('../plantilla.html', (error, dato) => {
                htmlContent += dato.toString();
                htmlContent = remplaceContent(htmlContent, contenido.busqueda);
                response.write(htmlContent);
                response.end();
            });
            break;

    }


}).listen(8080);

function remplaceContent(file, data) {
    let htmlTexto = file,
        cambios = file.match(/[^\{\{\}\}]+(?=\}\})/g);
    if (cambios != null) {
        cambios.forEach((cambio) => {
            htmlTexto = htmlTexto.replace(`{{${cambio}}}`, data[cambio]);
        });
        return htmlTexto;
    }
}



