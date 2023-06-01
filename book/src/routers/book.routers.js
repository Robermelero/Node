const {Router} = require ("express");
const router = Router();
const bookCtrl = require("../controller/book.controller");


router.get("/book", bookCtrl.getBook);
router.post("/book", bookCtrl.postBook);
router.delete("/book", bookCtrl.deleteBook);
router.put("/book", bookCtrl.putBook)

module.exports = router;