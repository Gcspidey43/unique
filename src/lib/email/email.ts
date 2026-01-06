import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    })

    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}

export function createLeadEmail(data: {
  fullName: string
  phoneNumber: string
  email: string
  interestedVisaType: string
  preferredCountry: string
  message?: string | null
}) {
  const timestamp = new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    dateStyle: 'full',
    timeStyle: 'short'
  })

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4f;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 30px;
            border-bottom: 3px solid #1e3a8a;
          }
          .logo {
            max-width: 200px;
            height: auto;
            margin: 0 auto 20px auto;
          }
          .logo-text {
            font-size: 24px;
            font-weight: bold;
            color: #1e3a8a;
          }
          .content {
            padding: 30px 0;
          }
          .section {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #1e3a8a;
            display: inline-block;
            width: 140px;
          }
          .value {
            color: #333;
          }
          .message-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #f59e0b;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #666;
          }
          .timestamp {
            color: #999;
            font-size: 12px;
            margin-top: 10px;
          }
          @media (max-width: 600px) {
            .container {
              padding: 20px;
            }
            .label {
              display: block;
              width: 100%;
              margin-bottom: 5px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🌍 Unique Visa Consultancy</div>
          </div>
          <div class="content">
            <h2 style="margin: 0 0 20px 0; color: #1e3a8a;">New Visa Inquiry Received!</h2>
            <p style="margin-bottom: 20px;">You have received a new inquiry through your website. Here are the details:</p>

            <div class="section">
              <p><span class="label">Full Name:</span> <span class="value">${data.fullName}</span></p>
              <p><span class="label">Phone:</span> <span class="value">${data.phoneNumber}</span></p>
              <p><span class="label">Email:</span> <span class="value">${data.email}</span></p>
              <p><span class="label">Visa Type:</span> <span class="value">${data.interestedVisaType}</span></p>
              <p><span class="label">Country:</span> <span class="value">${data.preferredCountry}</span></p>
            </div>

            ${data.message ? `
              <div class="section">
                <p><span class="label">Message:</span></p>
                <div class="message-box">${data.message}</div>
              </div>
            ` : ''}

            <p class="timestamp">Submitted on: ${timestamp}</p>
          </div>
          <div class="footer">
            <p><strong>Unique Visa Consultancy</strong></p>
            <p>Office Number 5, Gulzar e Madina Plaza, Near Bata Shoes</p>
            <p>Ramtalai Chowk, Gujrat, Pakistan</p>
            <p style="margin-top: 10px;">
              Phone: +92 319 6457841 | +92 323 4412387<br />
              WhatsApp: +92 323 4412387
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}
