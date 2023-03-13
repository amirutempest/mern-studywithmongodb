module.exports = app => {
    const mahasiswa = require('../controllers/mahasiswa.controller');
    const route = require("express").Router();

    route.get("/", mahasiswa.findAll);
    route.get("/:id", mahasiswa.show);
    route.post("/", mahasiswa.create);
    route.put("/:id:", mahasiswa.update);
    route.delete("/:id", mahasiswa.delete);

    app.use("/mahasiswa", route);

    // GET localhost://8080/mahasiswa
    // GET localhost://8080/mahasiswa/nomorid
}