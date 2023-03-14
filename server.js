const express = require('express');
const cors = require('cors');

const db = require("./app/models")
const app = express();
const corsOption = {
    origin: "*"
}

// menambahkan cors middleware
app.use(cors(corsOption));
app.use(express.json());
// koneksi ke DB
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => {
    console.log("database connect!")})
    .catch(err => {
    console.log(`failed connect ${err.message}`);
    process.exit();
});
// memanggil route mahasiswa
require("./app/routes/mahasiswa.routes")(app);
// membuat port akses
const port = process.env.port || 8080;
app.listen(port, () => console.log(`server berjalan di port ${port}`));