const {Router} = require ("express");
const router = Router();
const booksCtrl = require("../controller/books.controller");

router.get("/books", booksCtrl.getBooks);
router.get("/books/:id", booksCtrl.getBooksId);
router.post("/books", booksCtrl.postBooks);
router.delete("/books", booksCtrl.deleteBooks);
router.put("/books", booksCtrl.putBooks)

module.exports = router;