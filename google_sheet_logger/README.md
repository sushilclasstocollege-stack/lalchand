# Usage log (Google Sheet)

Each time someone generates an admit card (the **Generate admit card** button on phones, or **Print / Save as PDF** on a computer), a row is added to a Google Sheet. The row holds the time, the action, their form details and subjects, and their browser/device. Photos are not sent.

## Setup (once, about 5 minutes)

1. Create a new Google Sheet, e.g. "Admit card downloads".
2. In the sheet, open **Extensions → Apps Script**. Delete the sample code and paste in everything from `Code.gs`. Save.
3. Click **Deploy → New deployment**. Set the type (gear icon) to **Web app**, then:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and allow the permissions it asks for. Google warns that the app is unverified; choose Advanced → Go to project.
5. Copy the **Web app URL**, which ends in `/exec`.
6. In `admit_card_generator/index.html`, paste that URL between the quotes in `const LOG_URL = "";`, then commit and push.

The `Downloads` tab is created automatically when the first row arrives.

If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version**, so the same URL keeps working.
