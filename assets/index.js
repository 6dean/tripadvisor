const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN_URL;
const EMAIL = process.env.EMAIL;
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const messageData = {
      from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
      to: EMAIL,
      subject: "Mon mail custom",
      text: req.body.message,
    };

    const result = await client.messages.create(DOMAIN, messageData);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is now online /!\\ ");
});
