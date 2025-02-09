const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/save-dom", (req, res) => {
    const { domData, url } = req.body;

    if (!domData || !url) {
        return res.status(400).json({ error: "Invalid data" });
    }

    const fileName = `data/${Date.now()}_dom.json`;
    const jsonData = { url, timestamp: Date.now(), domData };

    fs.writeFile(fileName, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error("Error saving file:", err);
            return res.status(500).json({ error: "Error saving data" });
        }
        res.json({ message: "Data saved successfully", file: fileName });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
