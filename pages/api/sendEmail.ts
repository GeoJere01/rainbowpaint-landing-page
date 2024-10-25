import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, fullName, phoneNumber, location, description } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address
        pass: process.env.EMAIL_PASS, // Your Gmail password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: 'georgejere60@example.com', // Your email address
      subject: 'New Shop Inquiry',
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nLocation: ${location}\nDescription: ${description}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
};

export default handler;
