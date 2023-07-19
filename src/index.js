import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";


const app = express();

app.use(session({
    store: new MongoStore({
        mongoUrl: "mongodb+srv://marianowagnerrigo18:Marawarigo3360@cluster0.xjgkqac.mongodb.net/",
        ttl: 15,
    }),
    secret: "mongoSecret",
    resave: true,
    saveUninitialized: true
}))

app.get("/", (req, res)=>{
    req.session.user = req.query.name
    const parametro = req.query.parametro

    res.send("sesion set ok" + " " + parametro)
})

app.listen(8082, ()=>{
    console.log("server listen on port 8082")
})