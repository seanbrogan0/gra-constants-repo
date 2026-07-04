// lib/constants/legalText.ts
import { EMAIL_LEGAL, EMAIL_PRIVACY, EMAIL_SUPPORT, LEGAL_ADDRESS, LEGAL_NAME, AI_PROVIDER } from "./legalNames";
 import {EVENT_GOLD_PRICE} from "./prices";
// ─────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────
 
export const LEGAL_EFFECTIVE_DATE = "Effective Date: 20/06/2026 | Version 1.0";
 
// ─────────────────────────────────────────────
// Privacy Policy
// ─────────────────────────────────────────────
 
export const PRIVACY_POLICY_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: `1. Introduction`,
    body: "Grá is a mobile wedding planning and guest experience application. We take the privacy of everyone who uses or is connected with Grá very seriously.\n\nThis Privacy Policy explains what personal data we collect, why we collect it, how we use it, and your rights in relation to that data. It applies to the Grá mobile application, our website, and any associated services.\n\nGrá is committed to full compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and the Irish Data Protection Acts 1988–2018. Our supervisory authority is the Data Protection Commission (DPC) of Ireland.",
  },
  {
    heading: "2. Who We Are",
    body: `Data Controller: ${LEGAL_NAME}\nRegistered Address: ${LEGAL_ADDRESS}\nData Protection Contact: ${EMAIL_PRIVACY}\n\nFor any privacy-related queries, requests, or concerns, contact us at ${EMAIL_PRIVACY} or write to us at our registered address.`,
  },
  {
    heading: "3. The Data We Hold and Why",
    body: "Grá involves several distinct categories of users, each with a different data relationship with us.\n\nHost Data (Couples): When you register as a host and create a wedding event, we collect name, email address, wedding date, venue details, guest list data you upload, budget information, seating plan data, photos and media, communications via the Wedding Buzz feed, and vendor and planner booking information. Lawful basis: Performance of contract (Article 6(1)(b) GDPR).\n\nGuest Data: Host-uploaded guest data is processed on the host's behalf as a data processor. If you create a Grá account, we collect your email address, login credentials, and any additional information you voluntarily provide. Lawful basis: Legitimate interest (host-uploaded data) and contract (guest account data).\n\nVendor Data: Business name, contact details, profile information, portfolio images, service descriptions, and booking and communication data. Lawful basis: Performance of contract and legitimate interest.\n\nPlanner Data: Business name, contact details, profile information, portfolio images, service descriptions, and event management data relating to client events. Planners may access guest data for the sole purpose of managing events on behalf of hosts. Lawful basis: Performance of contract and legitimate interest.\n\nAI Assistant Data: When you use the in-app AI assistant (Cara), your messages and the assistant's responses are processed to deliver the feature and are stored against your account. Token usage is recorded for billing and quota management purposes. Lawful basis: Performance of contract.",
  },
  {
    heading: "4. How Long We Keep Your Data",
    body: "Host account data: Your personal data is permanently deleted and your account is anonymised immediately upon account deletion. All event data associated with your account is permanently deleted at the same time.\n\nEvent data (guest lists, seating plans, RSVPs, budget, photos): Retained for 60 days after the wedding date, then permanently deleted. A paid Data Retention subscription is available to extend this period.\n\nGuest account data: Your personal data is permanently deleted and your account is anonymised immediately upon account deletion. Your guest list entries on surviving events are anonymised at the same time.\n\nVendor and planner account data: Your personal data, profile, portfolio, and all associated storage assets are permanently deleted immediately upon account deletion.\n\nAI assistant conversation data: Retained for the duration of the associated event, then deleted in line with event data retention policy.\n\nMessage board posts: Posts you have made to event message boards are anonymised upon account deletion. The content of posts is retained as part of the event record but is no longer associated with your identity.\n\nPayment transaction records: Retained for 7 years in accordance with Irish tax and accounting requirements.\n\nAudit records: An anonymous record containing no personal data is retained indefinitely for internal integrity and compliance purposes. This record contains only a random identifier, the roles you held, and a count of records affected at the time of deletion.",
  },
  {
    heading: "5. Account Deletion and the Right to Erasure",
    body: `You may delete your Grá account at any time through the app settings. Account deletion is immediate and irreversible. The following actions are taken at the point of deletion:\n\nAll users: Your name, email address, phone number, and other personal identifiers are permanently deleted. Your account is anonymised — an internal identifier is retained solely for audit and integrity purposes and cannot be used to identify you.\n\nHosts: All event data you own, including guest lists, seating plans, RSVPs, budget information, photos, and communications, is permanently deleted immediately.\n\nCohosts: Your association with any events you were co-managing is removed. Guest list entries on those events are anonymised.\n\nGuests: Your guest list entries on surviving events are anonymised. Any seating assignments or gift reservations associated with your account are released and the event host is notified.\n\nVendors: Your vendor profile, portfolio, services, and all associated media are permanently deleted. Hosts with confirmed bookings are notified.\n\nPlanners: Your planner profile, portfolio, and all associated media are permanently deleted. Hosts of events you were managing are notified.\n\nIf you wish to have your information removed from a host's guest list before deleting your account, contact the event host directly. For any other erasure requests, contact us at ${EMAIL_PRIVACY}.`,
  },
  {
    heading: "6. Photographs and User-Generated Content",
    body: `You retain copyright in any photographs or content you upload to Grá. By uploading content to an event, you grant the event host and other authorised participants a non-exclusive, royalty-free licence to view and download that content within the Grá platform for the duration of the event and the 60-day post-event retention period.\n\nPhotographs of identifiable individuals constitute personal data under GDPR. Any person who appears in a photo may request its removal by contacting ${EMAIL_PRIVACY}. We will review and action such requests within 72 hours.`,
  },
  {
    heading: "7. Sharing Your Data",
    body: `We do not sell your personal data. We share data only with:\n\n• Supabase (our infrastructure provider) for data storage and processing within the EEA\n• Stripe for processing payments securely\n• ${AI_PROVIDER} for the purpose of delivering in-app AI assistant features\n• Vendors and planners you choose to interact with\n• Law enforcement or regulatory authorities where required by law\n• In the event of a business transfer, with advance notice to you`,
  },
  {
    heading: "8. Your Rights Under GDPR",
    body: `As a data subject, you have the following rights:\n\n• Right of access: request a copy of your personal data\n• Right to rectification: request correction of inaccurate data\n• Right to erasure: request deletion of your personal data\n• Right to restriction: request that we restrict processing\n• Right to data portability: request your data in a machine-readable format\n• Right to object: object to processing based on legitimate interest\n• Right to withdraw consent: where processing is based on consent\n\nTo exercise any of these rights, contact ${EMAIL_PRIVACY}. We will respond within 30 days. You have the right to lodge a complaint with the Data Protection Commission at www.dataprotection.ie.`,
  },
  {
    heading: "9. Children",
    body: "Grá is not intended for use by persons under the age of 18. We do not knowingly collect data from minors. RSVP responses on behalf of children are submitted by a parent or guardian.",
  },
  {
    heading: "10. Security",
    body: "We implement appropriate technical and organisational measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews. Our infrastructure is hosted by Supabase with EU data residency.",
  },
  {
    heading: "11. Contact",
    body: `Email: ${EMAIL_PRIVACY}\nData Protection Commission: www.dataprotection.ie | 01 765 0100`,
  },
];
 
// ─────────────────────────────────────────────
// Terms of Service
// ─────────────────────────────────────────────
 
export const TERMS_OF_SERVICE_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "1. Agreement to Terms",
    body: "These Terms of Service govern your use of the Grá mobile application and associated services. By creating an account or using the Service, you agree to be bound by these Terms. These Terms should be read alongside our Privacy Policy, which is incorporated by reference.",
  },
  {
    heading: "2. Eligibility",
    body: "You must be 18 years of age or older to create an account or use the Service. By using Grá, you confirm that you meet this requirement. RSVP responses on behalf of guests under 18 must be submitted by a parent or guardian.",
  },
  {
    heading: "3. User Roles and Accounts",
    body: "Host Accounts: By creating a Host account you agree to provide accurate event information, take responsibility for guest data you upload, ensure communications comply with applicable law, moderate event content, and keep login credentials secure.\n\nCohost Accounts: Cohosts are assigned by a host and share the same event management privileges. By accepting a cohost role, you agree to the same responsibilities as a host in relation to that event, including the handling of guest data.\n\nGuest Accounts: As a guest you agree to use the Service only for engaging with the specific wedding event to which you are invited, and to submit only lawful and appropriate content.\n\nVendor Accounts: Vendors agree to the Vendor Agreement, confirming all profile information is accurate and required licences are held.\n\nPlanner Accounts: Planners acknowledge access to personal guest data and agree to use it solely for event management in compliance with GDPR.",
  },
  {
    heading: "4. Acceptable Use",
    body: "You agree not to use the Service to:\n\n• Upload content that is unlawful, defamatory, obscene, or violates third-party rights\n• Impersonate any person or entity\n• Upload content that infringes intellectual property rights\n• Attempt unauthorised access to any part of the Service\n• Use the Service for unauthorised commercial purposes\n• Transmit unsolicited communications\n• Upload or transmit malicious code or viruses",
  },
  {
    heading: "5. Content Ownership and Licences",
    body: "You retain ownership of all content you upload to Grá. You grant Grá a limited, non-exclusive, royalty-free licence to store, display, and transmit your content solely for the purpose of providing the Service.\n\nWhen you upload a photo to a wedding event, you additionally grant the event host and other event participants a non-exclusive licence to view and download that photo within the Grá platform during the event and the 60-day post-event retention period.",
  },
  {
    heading: "6. Subscription, Payments, and Refunds",
    body: `Free Tier (Silver): Grá offers a free tier with wedding planning features including RSVP management, seating arrangements, gift registry, vendor search, and limited AI assistant access. No payment is required.\n\nGold Tier: Guest experience features are available as a per-event upgrade. This unlocks the full Wedding Day guest experience including Guest Buzz, photo uploads, gift registry access, schedule and directions, seating view on the day, and an increased AI assistant message allowance.\n\nAI Message Allowances: All tiers include a token-based AI message allowance. Usage is metered and the remaining allowance is visible in the app.\n\nAI Boost Packs: Additional AI message credit is available for purchase as boost packs. Boost packs are available to users on any tier, are non-refundable, and expire at the end of the associated event.\n\nPayments: Processed by Stripe. We do not store payment card data.\n\nRefunds: Offered only where the Service has not been accessed following purchase, or where a technical error prevented Service access. Requests must be submitted within 14 days to ${EMAIL_SUPPORT}.`,
  },
  {
    heading: "7. Event Data and Deletion",
    body: "All event data, including guest lists, seating plans, photos, and communications, is retained for 60 days after the wedding date, after which it is permanently deleted. A paid Data Retention subscription is available to extend this period; the extended retention duration and pricing are displayed in the app at the time of purchase and may be updated from time to time.\n\nIf a Data Retention subscription expires or is cancelled, the 60-day deletion window begins from the date of expiry or cancellation. We strongly recommend downloading any content you wish to keep before any applicable deletion date.\n\nUpon deletion of a Host account, all associated event data is permanently deleted immediately. Deletion of a Guest account anonymises your personal data and severs the link between your account and any events.",
  },
  {
    heading: "8. Service Availability and Liability",
    body: "Grá is provided on an 'as is and as available' basis. We will use reasonable endeavours to notify users of planned maintenance.\n\nTo the maximum extent permitted by Irish law, Grá's liability for any claim is limited to the amount paid by you in the 12 months preceding the claim. Grá is not liable for any loss of data, loss of profits, or indirect or consequential losses.",
  },
  {
    heading: "9. Bookings, Enquiries, and Platform Role",
    body: `Grá is a communication and planning platform. Booking requests, enquiries, and any messages exchanged between hosts, vendors, and planners through the Service do not constitute legally binding contracts between any parties.\n\nNo contract, agreement, or enforceable obligation arises from the use of Grá's booking or enquiry features. Any arrangement between a host and a vendor or planner, including scope of work, pricing, cancellation terms, or liability, must be agreed and documented separately between those parties outside of this platform.\n\n${LEGAL_NAME} is not a party to any such arrangement and accepts no liability for disputes, non-performance, cancellations, or losses arising from agreements made between users of the platform.\n\nGrá does not verify the credentials, qualifications, licences, or insurance of vendors or planners listed on the platform. Users are responsible for conducting their own due diligence before entering into any arrangement.`,
  },
  {
    heading: "10. Governing Law and Disputes",
    body: `These Terms are governed by the laws of Ireland. Any dispute shall be subject to the exclusive jurisdiction of the courts of Ireland.\n\nBefore initiating formal proceedings, please contact us at ${EMAIL_LEGAL} to seek an informal resolution.`,
  },
  {
    heading: "11. Contact",
    body: `General: ${EMAIL_SUPPORT}\nPrivacy: ${EMAIL_PRIVACY}\nLegal: ${EMAIL_LEGAL}`,
  },
];