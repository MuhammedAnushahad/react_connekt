// Importing necessary modules
// import { Email } from "./smtp";

// Function to send email using GoDaddy SMTP configuration
// export const sendMail = () => {
//   console.log("Sending...");
//   Email.send({
//     Host: "smtpout.secureserver.net", // GoDaddy's SMTP server hostname
//     Username: "info@connektplus.com", // Your GoDaddy email address
//     Password: "Connekt.plus786", // Your GoDaddy email password
//     To: "anjalakukku777@gmail.com",
//     From: "info@connektplus.com",
//     Subject: "Testing js - office",
//     Body: "Hola mundo del email port 578"
//   }).then((message) => {
//     console.log("Email sent successfully:", message);
//     alert("Email sent successfully");
//   }).catch((error) => {
//     console.error("Error sending email:", error);
//     alert("Failed to send email. Please try again later.");
//   });
// };

// import emailjs from 'emailjs-com';

// export const sendMail = () => {
//   console.log("Sending...");
//   emailjs.send("service_1dpbxao","template_51j52j5", {
//     to_email: 'anjalakukku777@gmail.com',
//     from_email: 'info@connektplus.com',
//     subject: 'Testing js - office',
//     message: 'Hola mundo del email port 578'
//   }, {
//     user: 'z8l1DDv8JW0kTVVUt',
    // user: 'info@connektplus.com',
    // password: 'Connekt.plus786',
//     host: 'smtpout.secureserver.net',
//     ssl: true
//   }).then((response) => {
//     console.log("Email sent successfully:", response);
//     alert("Email sent successfully");
//   }).catch((error) => {
//     console.error("Error sending email:", error);
//     alert("Failed to send email. Please try again later.");
//   });
// };

