const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const nodemailer = require("nodemailer");

const buildFolderPath = path.join(__dirname, '../frontend/build');

app.use(express.static(buildFolderPath));
app.use(cors());
app.use(express.json());

app.use('/', router);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
module.exports = app;

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const message = req.body.message;
    console.log(req.body);
    const mail = {
        from: firstname + " " + lastname,
        to: process.env.EMAIL,
        subject: "Contact Form Submission",
        html: `<p>First Name: ${firstname}</p>
           <p>Last Name: ${lastname}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});
