# CERO — Intelligent Chronic Patient Care & Doctor-Patient Platform

**CERO** is a production-grade, highly interactive, modular, and visually stunning Healthcare Web Application tailored for chronic disease patients (such as Dengue Convalescence, Type-2 Diabetes Mellitus, and Hypertension). It bridges the communication and care gap between attending doctors and patients through real-time telemetry, automated reminders, AI triage, instant telehealth video consultations, and emergency dispatch systems.

---

## 🌟 Key Features & Improvements Implemented

### 1. Accurate Medicine Timing & Automatic Next-Dose Calculator
- **Automated Next Dose Scheduling**: When a patient marks a medicine dose as taken, CERO dynamically calculates the next dose timing based on prescribed frequency and intervals (e.g., `intervalHours: 6, 8, 12, or 24`), displaying countdowns such as *"Next dose scheduled: 02:30 PM Today (in 6 hours)"*.
- **Live Countdown Timer Card**: High-visibility dashboard countdown clock showing active remaining hours, minutes, and seconds for the closest upcoming dose.
- **Overdue Detection**: Identifies overdue medicines in real-time and surfaces alerts with overdue duration badges.
- **Celebratory Micro-Interactions**: Triggers confetti bursts (`canvas-confetti`) and synthesized victory chimes upon logging a dose.

### 2. High-Reliability SOS Emergency Sound & Siren System
- **Synthesized Emergency Siren**: Uses the native Web Audio API dual-oscillator sweep (650Hz–920Hz) with zero external asset dependencies, ensuring it works offline and reliably across modern browsers.
- **Audible Speech Alert**: Automatically vocalizes *"Emergency medical alert triggered. Emergency contacts notified."* via the browser's `SpeechSynthesis` API.
- **Mute / Unmute Siren Controls & Test Audio**: In-modal controls to test sound, mute or unmute siren volume.
- **5-Second Auto-Dispatch Countdown**: Dispatches simulated National Ambulance 108 with real-time GPS coordinates (`28.6139° N, 77.2090° E`).
- **Emergency Contact Notification**: Instant simulated SMS & WhatsApp alert dispatched with clinical condition summary to the patient's registered contact (`Anita Sharma: +91 98765 43210`).

### 3. Clear, Intuitive Patient Medicine Guidance
- **No Confusion Instructions**: Every medicine card prominently displays:
  - **Required Dosage & Strength**: e.g. `1 Tablet (650mg)`, `1 Capsule (1100mg)`
  - **When to Take**: e.g. `Morning (08:30 AM)`, `Afternoon (01:30 PM)`
  - **Meal Relationship**: e.g. `After Breakfast`, `Midway through Dinner`, `With warm water`
  - **Step-by-step How to Take**: Clear bullet points on how to swallow, upright posture, etc.
  - **Critical Warnings / What to Avoid**: Highlights foods or drugs to avoid (e.g. *“Never take on an empty stomach”*, *“Avoid salt substitutes with excess potassium”*).

### 4. Project-Wide Renaming: Legacy brand → “CERO”
- Rebranded throughout `package.json`, `index.html`, components, headers, page titles, and metadata.
- Custom glowing CERO Heartbeat vector favicon and brand header.

### 5. High-Impact Healthcare Features Added
- **Direct Doctor-Patient Query Channel**: Real-time messaging bridge between patients and verified specialists (Dr. Arvind Verma from AIIMS, Dr. Sunita Kulkarni from Apollo, Dr. Rajeshwari Nair from Fortis) with simulated specialist replies.
- **Zoom-Style HD Telehealth Video Call Simulator**:
  - Split camera feeds for doctor and patient (picture-in-picture).
  - Controls for mic toggle, camera toggle, screen sharing, and call termination.
  - **Live Digital Prescription Pad**: Displays active notes typed by the doctor during the consultation with 1-click **“Add Prescribed Dose to Schedule”**.
- **AI Prescription OCR Uploader**: Drag-and-drop doctor prescription scanner with multi-phase scanning animations (*Optical Character Recognition → Clinical Parsing → Schedule Synchronization*).
- **Simulated IVR Automated Phone Reminder**:
  - Overdue call popup with simulated phone ringtone.
  - Synthesized voice playback of instructions with **“Press 1: Acknowledge & Mark Taken”**.
- **Specialized AI Health Assistant & Triage**:
  - 3 AI Modes: *Symptom Triage*, *Diet & Nutrition Coach*, and *Lab Report Explainer*.
  - Color-coded risk indicators: Low (Green), Moderate (Yellow), Critical (Red).
  - Actionable clinical steps and doctor referrals.
- **Medical Records & Lab Reports Vault**:
  - Store and inspect CBC Blood Tests, Fasting Glucose, HbA1c, and Renal Panels.
  - Visual status badges for platelets, hemoglobin, leukocytes, and antigens.
  - Dynamic **Upload Medical Report** modal.
- **Oral Hydration Tracker**: 3-Litre daily water/fluid counter essential for dengue hematocrit recovery.
- **Interactive Patient Profile & BMI Calculator**: Switch between demo profiles (Ramesh Sharma: Dengue/BP, or Ananya Patel: Diabetes), edit emergency contacts, blood group, height, and weight.

---

## 🚀 How to Run the Application

The project is completely built and ready to use.

### Easiest option: one click
Double-click **`OPEN-CERO-APP.bat`** in Windows File Explorer. It starts CERO and opens it automatically in your web browser. Keep the small "CERO Server" window open while using the app; close it when you are finished.

### 1. Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view CERO.

### 2. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS + Custom Dark Glassmorphism Design System
- **Icons**: Lucide React
- **Audio Engine**: Native Web Audio API + SpeechSynthesis Synthesizer
- **Animations**: Canvas Confetti, SVG ECG Pulse Waveforms, CSS Keyframe Glows
