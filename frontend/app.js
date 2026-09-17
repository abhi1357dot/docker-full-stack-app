const express = require("express");

const app = express();

const PORT = 3000;

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
        const response = await fetch("http://backend:5000/submit", {
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

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});