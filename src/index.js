const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json({ limit: "30kb" }));
app.use(express.urlencoded({ extended: true, limit: "30kb" }));


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB is Connected"))
    .catch((error) => {
        console.log("MongoDB Error", error);
    });

app.listen(PORT, () => {
    console.log(`Server is listen on port: http://localhost:${PORT}`);
})    