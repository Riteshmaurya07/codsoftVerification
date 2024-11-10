const express = require("express");
const app = express();
const path = require("path");

let students = [
    {
        id: "4107qf5",
        username: "Rishabh",
        domain: "Web Development",
        duration: "4 weeks",
        startingDate: "04/Jul/2024",
        awardingDate: "04/Aug/2024"
    },
    
    {
        id: "6872ab6",
        username: "Ritesh",
        domain: "Web Development",
        duration: "4 weeks",
        startingDate: "25/Jul/2024",
        awardingDate: "25/Aug/2024"
    },
    {
         id: "3473dq6",
        username: "Abhinandan Gupta",
        domain: "Web Development",
        duration: "4 weeks",
        startingDate: "02/Jul/2024",
        awardingDate: "02/Aug/2024"
    
    }
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/verification", async (req, res) => {
    try {
        console.log(req.body);
        res.render("index");
    } catch (error) {
        console.error("Error rendering index page:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/verification/certificate", (req, res) => {
    let { cid } = req.body;
    let student = students.find(student => student.id === cid);
    if (student) {
        res.render("verified", { student });
    } else {
        res.render("error",);
    }
});

app.get("/", (req, res) => {
    res.render("index");
    console.log("Root route accessed successfully");
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port 8080");
});
