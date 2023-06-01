const { Book } = require("../models/book");

let book = new Book();

function getBook(request, response)
{
    let respuesta;
    if (book != null)
    respuesta = book;
    else
    respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};

    response.send(respuesta);
};

function postBook(request, response)
{
    let respuesta;
    console.log(request.body);
    if(book === null)
    {
        book     = {title: request.body.title,
                    type: request.body.type,
                    author: request.body.author,
                    number: request.body.number,
                    photo: request.body.photo,
                    id_book: request.body.id_book,
                    id_user: request.body.id_user}

        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro creado correctamente', data: book};
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'Libro ya existe'};

    response.send(respuesta);
};

function putBook(request, response)
{
    let respuesta;
    if (book != null)
    {
        book.title      =request.body.title;
        book.type       =request.body.type;
        book.author     =request.body.author;
        book.number     =request.body.number;
        book.photo      =request.body.photo;
        book.id_book    =request.body.id_book;
        book.id_user    =request.body.id_user;
        respuesta       = {error:false, codigo: 200,
                           mensaje:'Libro actualizado', data: book};
    }
    else    
        respuesta = {error: true, codigo: 200,
                    mensaje:'El libro no existe', data: book};

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta;
    if (book != null)
    {
        book    = null;
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Usuario borrado', data: book}
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El usuario no existe', data: book};

        response.send(respuesta);
}


module.exports = {getBook, postBook, deleteBook, putBook}