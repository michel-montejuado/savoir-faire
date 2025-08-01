# **Product Specification: Savoir-Faire**

**Version:** 1.0
**Date:** August 1, 2025
**Status:** Draft

---

## **1. Executive Summary**

**Savoir-Faire** is a mobile-first, B2B SaaS platform designed to help businesses capture, preserve, and share critical hands-on knowledge (`savoir-faire`). It functions as a private, secure video library of short, practical "how-to" guides created by a company's own experts. By replacing dense paper manuals with an engaging, searchable, video-first format, Savoir-Faire mitigates the risk of knowledge loss from employee turnover, retirement, or absence, while dramatically accelerating the onboarding and training of new team members.

---

## **2. The Problem Statement**

In many industries, particularly manufacturing, skilled trades, hospitality, and artisanal sectors, a company's most valuable asset is the tacit knowledge held by its experienced employees. This "tribal knowledge" is often unwritten and learned through years of practice.

The continuity of the business is threatened when:
- Senior employees with decades of `savoir-faire` retire.
- Key personnel are on extended leave (e.g., during the August holidays in France).
- New or temporary staff need to be trained quickly on complex, practical tasks.

Traditional solutions like paper manuals or formal wikis (e.g., Confluence) are ill-suited for capturing the nuances of a physical task. They are slow to create, difficult to update, and rarely consulted by employees on the workshop floor or in the field.

---

## **3. Target Audience & User Personas**

The platform is designed for three key user personas within a client organization:

- **L'Expert (The Expert) - Michel, 58, Workshop Foreman:**
  - **Needs:** A dead-simple way to record and share his techniques without complex technology. He is proud of his work and wants to pass it on correctly.
  - **Pains:** Hates writing documentation. Gets tired of repeating the same instructions to new hires.
  - **The App Must Be:** Fast, intuitive, and focused on video, not typing.

- **L'Apprenante (The Learner) - Chloé, 24, New Technician:**
  - **Needs:** Quick, clear, on-demand answers to "How do I...?" questions while on the job.
  - **Pains:** Intimidated to constantly ask Michel for help. Paper manuals are confusing and out of date.
  - **The App Must Be:** Searchable, mobile, and provide instant visual guidance.

- **L'Administratrice (The Administrator) - Isabelle, 45, HR/Operations Manager:**
  - **Needs:** A secure system to manage users, control access, and see that the platform is being used. She needs to demonstrate ROI for her subscription.
  - **Pains:** Worried about knowledge loss when Michel retires. Onboarding costs are high.
  - **The Platform Must Be:** Secure, easy to manage, and provide basic analytics.

---

## **4. System Architecture & Components**

The Savoir-Faire platform consists of three main components:

1. **Mobile App (iOS & Android):** The primary interface for all employees. Used for both creating and consuming knowledge on the go.
2. **Web Dashboard (Responsive Web App):** The administrative control center for managers and HR to manage users, content, and company settings.
3. **Server Backend (Cloud-based):** The core of the SaaS. Handles authentication, video processing and storage, database management, search indexing, and API services.

---

## **5. Core Features (Minimum Viable Product - MVP)**

The goal of the MVP is to deliver the core value proposition: easily capturing and finding video-based knowledge.

### **5.1. Mobile App Features (for Experts & Learners)**

- **Secure Login:** Simple email and password authentication.
- **Content Creation Flow:**
  - **Record:** In-app camera access to record video clips (max 90 seconds). Ability to pause and resume.
  - **Simple Editing:** Trim the start and end of the video.
  - **Text Overlays:** Add basic, timed text boxes to highlight key steps.
  - **Publishing:** Give the video a clear `Title`, add descriptive `Tags` (e.g., #calibration, #machineB, #safety), and publish to the company's private library.
- **Content Consumption:**
  - **Main Feed:** A simple, reverse-chronological feed of the latest guides.
  - **Powerful Search:** A prominent search bar to find guides by `Title` or `Tag`.
  - **Video Playback:** A clean, full-screen video player with standard controls. Title, creator, and tags are clearly visible.
- **My Profile:** A simple screen showing the user's name and a list of the guides they have created.

### **5.2. Web Dashboard Features (for Administrators)**

- **User Management:**
  - Invite new users via email.
  - Assign user roles (`Admin`, `Expert` - can create, `Viewer` - view only).
  - Deactivate/remove users who have left the company.
- **Content Management:**
  - View the entire library of published videos.
  - Edit video titles and tags.
  - Delete inappropriate or outdated videos.
- **Basic Analytics Dashboard:**
  - Simple vanity metrics: Total number of users, total number of videos, total views.
- **Company Settings:**
  - Upload company logo.
  - Change company name.

---

## **6. Post-MVP Roadmap (Future Growth)**

- **Q1 Post-Launch:**
  - **Learning Paths:** Admins can group a sequence of videos into a "Learning Path" for structured training (e.g., "Onboarding for Technicians").
  - **Comments & Reactions:** Allow users to leave comments or ask questions on a video, fostering discussion. Add a simple "Helpful" button.
- **Q2 Post-Launch:**
  - **Quizzes & Certifications:** Admins can create simple multiple-choice quizzes attached to a video or learning path to verify comprehension.
  - **Advanced Analytics:** Track completion rates for learning paths, identify most-viewed guides, and pinpoint knowledge gaps (searches with no results).
- **Year 2 & Beyond:**
  - **Augmented Reality (AR):** Allow experts to "pin" instructions onto real-world machinery, which learners can view through the app's camera.
  - **Integrations:** Connect with HRIS platforms for automatic user provisioning and with tools like Slack/Teams for notifications.
  - **Multi-language Support:** Automatic voice transcription and translation for international teams.

---

## **7. Monetization Model**

A tiered monthly/annual subscription model:

- **Starter (€49 / month):**
  - Up to 10 users (`Experts` or `Viewers`).
  - 50 GB video storage.
  - All MVP features.
  - Community support.

- **Pro (€199 / month):**
  - Up to 50 users.
  - 250 GB video storage.
  - Includes **Learning Paths** and **Comments & Reactions**.
  - Priority email support.

- **Enterprise (Custom Pricing):**
  - Unlimited users.
  - Unlimited storage.
  - Includes **Quizzes, Advanced Analytics, and Integrations**.
  - Single Sign-On (SSO) and dedicated account manager.

---

## **8. Technical Considerations**

- **Cloud Infrastructure:** Leverage a major cloud provider (AWS, GCP, or Azure) for scalability and reliability.
- **Video Processing:** A critical component. Use services like AWS Elemental MediaConvert or Mux to handle video transcoding, optimization, and adaptive bitrate streaming for smooth playback on all devices.
- **Security:** As this is internal company data, security is paramount. End-to-end encryption for data in transit and at rest. Robust role-based access control (RBAC).
- **Search:** Implement a powerful search service like Elasticsearch or Algolia to handle fast and relevant keyword/tag searches.
