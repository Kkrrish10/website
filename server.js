const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// CONNECT TO MONGODB
mongoose.connect("mongodb+srv://FSDsite:12345@cluster0.xxxxx.mongodb.net/studentsDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// SCHEMA
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    marks12: Number,
    dob: String
});

// MODEL
const Student = mongoose.model("Student", StudentSchema);

// ROUTE TO STORE STUDENT DETAILS
app.post("/register", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send({ success: true, message: "Student data saved successfully!" });
    } catch (err) {
        res.send({ success: false, message: "Error saving data" });
    }
});

// RUN SERVER
app.listen(5000, () => console.log("Server running on port 5000"));