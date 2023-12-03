const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");
const port = 3000;

function date() {
  let now = new Date();

  let date = {
    annee: now.getFullYear(),
    mois: now.getMonth() + 1,
    jour: now.getDate(),
    heure: now.getHours(),
    minute: now.getMinutes(),
  };

  return date;
}

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "logcv@outlook.fr",
    pass: "Log1234.",
  },
});

function sendEmail() {
  let mailOptions = {
    from: "logcv@outlook.fr",
    to: "hugo.cledy.mailpro@gmail.com",
    subject: "Nouvelle visite sur le site",
    text: `Quelqu'un a visité votre site le ${date().jour}/${date().mois}/${date().annee} a ${date().heure}h${date().minute}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
}

app.get("/", (req, res) => {
  sendEmail();

  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.get("/style", (req, res) => {
  const filePath = path.join(__dirname, "style.css");
  res.sendFile(filePath);
});

app.get("/js", (req, res) => {
  const filePath = path.join(__dirname, "index.js");
  res.sendFile(filePath);
});

app.get("/font", (req, res) => {
  const filePath = path.join(__dirname, "font/MajorMonoDisplay-Regular.ttf");
  res.sendFile(filePath);
});

app.get("/img", (req, res) => {
  const filePath = path.join(__dirname, "img/myPicture.png");
  res.sendFile(filePath);
});

app.get("/svg", (req, res) => {
  const filePath = path.join(__dirname, "SVG/svgBtn.svg");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
