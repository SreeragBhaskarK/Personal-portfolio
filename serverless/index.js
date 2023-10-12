const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require('cors')
const { config } = require('dotenv')
config()
const nodemailer = require('nodemailer')
app.use(express.json())
app.use(cors({
  origin:'*',
  methods: 'POST', 
}))
app.post("/", async (req, res, next) => {
  try {
    const formData = req.body
    const { SEND_MAIL, SEND_MAIL_PASSWORD } = process.env
  
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: SEND_MAIL,
        pass: SEND_MAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: SEND_MAIL,
      to: SEND_MAIL,
      subject: 'contact message in portfolio ' + formData.email_subject,
      html: `<p>contact message</p><p style="color:tomato;
      font-size:25px;letter-spacing:2px;"><b>contact message</b></p><p>Contact information <b><br>name : ${formData.name}<br>email : ${formData.email}<br>phone : ${formData.phone}<br>message : ${formData.message} </b>.</p>`
    };
  
    await transporter.sendMail(mailOptions);
  
    return res.status(200).json({
      message: "successfully send...", success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message:error.message, success: false,
    });
  }
 
});



module.exports.handler = serverless(app);
