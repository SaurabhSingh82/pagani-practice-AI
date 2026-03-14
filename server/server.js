require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Graceful fallback state if MongoDB isn't running
let useInMemoryFallback = false;
const inMemoryInquiries = [];

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/pagani';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully.');
  })
  .catch((err) => {
    console.error('⚠️ Failed to connect to MongoDB. Using in-memory fallback array.');
    console.error('   Error Details:', err.message);
    useInMemoryFallback = true;
  });

const nodemailer = require('nodemailer');

// Setup Mongoose Schema & Model
const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

// Avoid OverwriteModelError in dev environments with nodemon
const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pmdss8787@gmail.com', 
    pass: 'apxs zfyu wjii cmtb'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// ----------- ROUTES -----------

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    // 1. Send an Email
    const mailOptions = {
       from: `"${name}" <${email}>`, 
       to: process.env.OWNER_EMAIL || 'pmdss8787@gmail.com', // Replace with your actual email
       subject: `New Contact Request from ${name} (Pagani Zonda R)`,
       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // In a real scenario with proper credentials, this sends an email
    // For now we log it to console to prove it hit the route without crashing
    console.log(`[EMAIL] Attempting to send message from ${name} to owner...`);
    try {
      await transporter.sendMail(mailOptions);
      console.log(`[EMAIL] Successfully sent!`);
    } catch (mailError) {
      console.error(`[EMAIL WARNING] Could not send via SMTP (check credentials). Logging message instead:`);
      console.log(mailOptions.text);
    }

    res.status(200).json({ success: true, message: 'Message sent successfully.'});
  } catch (error) {
    console.error("Error processing contact request:", error);
    res.status(500).json({ error: 'Failed to process contact request.' });
  }
});

app.post('/api/inquiry', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  try {
    const newInquiry = { name, email, message, createdAt: new Date() };

    if (useInMemoryFallback) {
      inMemoryInquiries.push(newInquiry);
      console.log(`[INQUIRY - MEMORY] Saved inquiry from ${name}`);
    } else {
      const doc = new Inquiry(newInquiry);
      await doc.save();
      console.log(`[INQUIRY - DB] Saved inquiry from ${name} to MongoDB`);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Inquiry received successfully. We will be in touch shortly.' 
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: 'Failed to save inquiry.' });
  }
});

app.get('/api/inquiries', async (req, res) => {
  try {
    let inquiries = [];
    if (useInMemoryFallback) {
      inquiries = [...inMemoryInquiries].sort((a, b) => b.createdAt - a.createdAt);
    } else {
      inquiries = await Inquiry.find().sort({ createdAt: -1 });
    }
    res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ error: 'Failed to fetch inquiries.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Pagani Zonda API running on http://localhost:${PORT}`);
});
