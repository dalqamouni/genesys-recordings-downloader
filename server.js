const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/start-download', async (req, res) => {
    const { division, user, queue, startDate, endDate } = req.body;

    if (!division) {
        return res.status(400).json({ message: "Division is required" });
    }

    console.log(`Starting download for Division: ${division}, User: ${user || "All"}, Queue: ${queue || "All"}`);  
    res.json({ message: "Download started! Check your Genesys Cloud for progress." });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
