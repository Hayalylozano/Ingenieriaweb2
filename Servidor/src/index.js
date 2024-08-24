const app = require("./app.js");
const config = require("./config.js");
const { conection } = require("./db/dbSequealize.js");
const cors = require("cors");

app.use(cors())

app.listen(app.get ('port'), async () => {
    console.log("corriendo en el puerto ", app.get("port"));

    await conection();
});
