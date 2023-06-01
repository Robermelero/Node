const  express = require('express');
const app = express();

// app.get("/", function (req,res,next)
// {
//     console.log('Petición recibida del cliente');
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.method);
//     console.log(req.headers["user-agent"])
//     res.status(200).json({ok: true, message: "Recibido!"})
//     next()
// });

app.get("/bye", function (req,res,next)
{
    console.log('Petición recibida del cliente');
    console.log(req.url);
    console.log(req.method);
    console.log(req.method);
    console.log(req.headers["user-agent"])
    res.status(200).json({ok: true, message: "Recibido!"})
    next()
});

app.listen(3000)
