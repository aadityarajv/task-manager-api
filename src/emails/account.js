const MailSlurp = require("mailslurp-client").default;
const mailslurp = new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });

const inboxID = process.env.MAILSLURP_INBOX_ID;


const sendWelcomeEmail = async (email, name) => {
    try {
        const options = {
            to: [email],
            subject: 'Thanks for joining in!',
            body: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        }
        await mailslurp.sendEmail(inboxID, options);
    } catch (e) {
        console.log(e);
    }
}

const sendDeletionEmail = async (email, name) => {
    try {
        const options = {
            to: [email],
            subject: 'Sorry to see you go!',
            body: `GoodBye, ${name}. I hope to see you soon.`
        }
        await mailslurp.sendEmail(inboxID, options);
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}