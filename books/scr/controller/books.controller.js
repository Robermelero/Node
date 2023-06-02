const { Book } = require("../models/book");

let books  =  [];

function getBooksId(request, response)
{   
    let id = request.params.id_book
    console.log(id)
    let respuesta;
    let book1 = books.find((book) => book.id_book == id)
    if (book1 != null)
    respuesta = book1;
    else
    respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};

    response.send(respuesta);
};
function getBooks(request, response)
{
    let respuesta;
    if (books.length>0)
    respuesta = books;
    else
    respuesta = {error: true, codigo: 200, mensaje: "No hay libros que mostrar"};

    response.send(respuesta);
};

function postBooks(request, response)
{
    let respuesta;
    console.log(request.body);
    
       let book     =new Book (request.body.title,
                    request.body.type,
                    request.body.author,
                    request.body.number,
                    request.body.photo,
                    request.body.id_book,
                    request.body.id_user)
        
        books.push(book)

        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro creado correctamente', data: book};
    


    response.send(respuesta);
};

function putBooks(request, response)
{
    let respuesta;
    let book = books.find((book)=> book.id_book == id_book);
    if (book)
    {
        book.title      =request.body.title;
        book.type       =request.body.type;
        book.author     =request.body.author;
        book.number     =request.body.number;
        book.photo      =request.body.photo;
        book.id_book    =request.body.id_book;
        book.id_user    =request.body.id_user;
        respuesta       = {error:false, codigo: 200,
                           mensaje:'Libro actualizado correctamente', data: book};
    }
    else    
        respuesta = {error: true, codigo: 200,
                    mensaje:'El libro no existe', data: book};

    response.send(respuesta);
};

function deleteBooks(request, response)
{
    let respuesta;
    let id = request.body.id_book;
    let index = books.findIndex((book) => book.id_book === id);
    if (index !== -1) {
        let deletedBook = books.splice(index, 1);
        respuesta = {error: false, codigo: 200,
                    mensaje: 'Libro borrado', data: deletedBook}
    }
    else
        respuesta = {error: true, codigo: 200,
                    mensaje: 'El libro no existe', data: book};

        response.send(respuesta);
}


module.exports = {getBooks,getBooksId, postBooks, deleteBooks, putBooks}