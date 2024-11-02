var nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = (emailTo) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.email}`,
      pass: `${process.env.password}`,
    },
  });

  var mailOptions = {
    from: `${process.env.email}`,
    to: `${emailTo}`,
    subject: "Transfer Successful",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Inter"
      rel="stylesheet"
    />
    <title>Document</title>
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      font-family: 'Inter';
      font-size: 14px;
      color: #747171;
    "
  >
    <section style="width: 40%">
      <div
        style="
          border-bottom: 1px solid grey;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <img
          src="https://ci3.googleusercontent.com/meips/ADKq_Na2TWbPsnNe7eBVTQHUpND4wAfkL5ihim_8jF4bF599_Cp4mcUaB1uhlz30ED7zwVKSK1ZvYGj4v9ord_w3fe6E1S8UbNSH-r8lhRfIplr8sBkrNQprsCXV0UwN8Id-rpU8ByDIhq-bdmlCUkaK=s0-d-e1-ft#https://files.opayweb.com/images/marketing/activityTemplate/2023-07-26/opay_logo_559.png"
          alt=""
          style="width: 120px; margin-bottom: 30px"
        />
      </div>
      <div style="display: flex; flex-direction: column; gap: 50px">
        <div style="margin: 30px 0 0 0">Dear MIGHTY</div>
        <div style="margin: 0">
          Your transfer of ₦2,100.00 has been confirmed and the recipient is
          expected to be credited within 5 minutes. Your available balance is
          ₦1,729.26 .
        </div>
        <div>
          <h6 style="margin: 0; margin-bottom: 10px; color: black">Transfer Details:</h6>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Name:</p>
            <h6 style="margin: 0; color: black">AKUNEME MIGHTY</h6>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Bank:</p>
            <h6 style="margin: 0; color: black">Opay</h6>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Account Number:</p>
            <h6 style="margin: 0; color: black">8120852872</h6>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Amount:</p>
            <h6 style="margin: 0; color: black">₦20,000</h6>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Date:</p>
            <h6 style="margin: 0; color: black">Monday, January 09 2021</h6>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              gap: 50px;
              align-items: center;
            "
          >
            <p style="margin: 0">Time:</p>
            <h6 style="margin: 0; color: black">13:31:48</h6>
          </div>
        </div>
        <div>
          <p>
            For further enquiries, please contact our customer support through
            the following channels:
          </p>
        </div>
        <div></div>
      </div>
    </section>
  </body>
</html>
`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { mailSender };
