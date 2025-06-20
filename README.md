# Automated Medical Billing (MERN + AI)

A full-stack project to automate medical billing using the MERN stack (MongoDB, Express, React, Node.js) and Python-based AI for OCR and code suggestions.

## Key Features
1. **User Roles**: Admin, Billing Staff, Doctor/Nurse, Patient (optional)
2. **Authentication**: JWT-based login/signup, Google login (optional)
3. **Patient Record Management**: Profiles, document uploads, insurance details
4. **Medical Bill Input**: Manual entry, upload scanned bills
5. **AI-Based OCR & Billing Automation**: Extract data from images, auto-fill forms, error flagging
6. **ICD/CPT Code Suggestions**: Auto-suggest codes using ML/NLP
7. **Invoice Generation**: Itemized invoice, PDF export
8. **Claim Submission Tracker**: Track insurance claim status
9. **Analytics Dashboard**: Billing/claims analytics

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI/OCR**: Python (Tesseract/Google Vision, scikit-learn/transformers)

---

## Getting Started
- `client/` - React frontend
- `server/` - Node/Express backend
- `ai/` - Python AI microservice 