
export async function onRequestPost({ request, env }) {
  const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" }
    });

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid request." }, 400);
  }

  const { name, email, message, website } = body || {};

  // Honeypot: silently ignore automated spam.
  if (website) {
    return json({ success: true });
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
    return json({ success: false, error: "Please check all fields." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return json({ success: false, error: "Enter a valid email address." }, 400);
  }

  if (!env.MAILERSEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    console.error("Missing required email configuration.");
    return json({ success: false, error: "Email service is not configured." }, 500);
  }

  try {
    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.MAILERSEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: {
          email: "pateltrushtiv@gmail.com",
          name: "Trushti Portfolio"
        },
        to: [{ email: env.CONTACT_TO_EMAIL }],
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
    });

    if (!response.ok) {
      console.error("MailerSend returned status:", response.status);
      return json({ success: false, error: "Email could not be sent." }, 502);
    }

    return json({ success: true });
  } catch (error) {
    console.error("Email request failed:", error);
    return json({ success: false, error: "Please try again later." }, 502);
  }
}
