
const express = require("express");

const app = express();

const PORT = 3000;

// Backend URL
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

// Configure EJS
app.set("view engine", "ejs");

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Handle form submission
app.post("/submit", async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/submit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();

        console.log("Response from Flask:", result);

        res.json(result);

    } catch (error) {
        console.error("Error communicating with Flask:", error);

        res.status(500).json({
            success: false,
            message: "Unable to communicate with Flask backend"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});

