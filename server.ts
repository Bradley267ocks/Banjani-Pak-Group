import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, industry, message } = req.body;

    if (!name || !email || !phone || !industry || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recipientEmail = "mnguniroger26@gmail.com";
    
    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured. Printing email to console for debugging.");
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: New Inquiry from ${name}`);
      console.log(`Content: Name: ${name}, Email: ${email}, Phone: ${phone}, Industry: ${industry}, Message: ${message}`);
      
      return res.status(200).json({ 
        success: true, 
        message: "Development mode: SMTP not configured, but inquiry logged to console.",
        debug: true 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        secure: smtpPort === "465",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`, // Using SMTP user as sender
        to: recipientEmail,
        replyTo: email, // Customer's email for easy reply
        subject: `New Banjani Pak Inquiry: ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Industry: ${industry}
Message: ${message}
        `,
        html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Inquiry sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send inquiry. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
