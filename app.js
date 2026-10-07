const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Node.js Docker App",
        environment: ENV
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
