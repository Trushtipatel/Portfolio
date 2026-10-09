
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed"
    });
  }

  const { name, email, message, website } = req.body || {};

  // Basic spam protection: reject submissions that fill the hidden field.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim() ||
    name.length > 100 ||
    email.length > 254 ||
    message.length > 5000
  ) {
    return res.status(400).json({
      success: false,
      error: "Please check the form fields."
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid email address."
    });
  }

  const apiKey = process.env.MAILERSEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !recipient) {
    console.error("Contact form environment variables are missing.");
    return res.status(500).json({
      success: false,
      error: "Email service is not configured."
    });
  }

  try {
    const mailResponse = await fetch(
      "https://api.mailersend.com/v1/email",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: {
            email: "pateltrushtiv@gmail.com",
            name: "Trushti Portfolio"
          },
          to: [{ email: recipient }],
          reply_to: {
            email: email.trim(),
            name: name.trim()
          },
          subject: "New message from trushti.space",
          text:
            `Name: ${name.trim()}\n` +
            `Email: ${email.trim()}\n\n` +
            `Message:\n${message.trim()}`
        })
      }
    );

    if (!mailResponse.ok) {
      const details = await mailResponse.text();
      console.error("MailerSend error:", mailResponse.status, details);
      return res.status(502).json({
        success: false,
        error: "The email service could not send your message."
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return res.status(502).json({
      success: false,
      error: "Unable to send your message right now."
    });
  }
}
