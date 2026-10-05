/**
 * Receives one record per admit-card print/download from the generator page
 * and appends it as a row to the "Downloads" tab of this spreadsheet.
 * Setup steps: see README.md in this folder.
 */
const SHEET_NAME = "Downloads";
const HEADERS = ["Time", "Action", "Roll No.", "Name", "Email", "Degree / Branch", "Semester",
                 "Session", "Timetable", "Subjects", "Device"];
const FIELDS = ["action", "roll", "name", "email", "degree", "sem", "session", "timetable", "subjects", "device"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }
    sheet.appendRow([new Date()].concat(FIELDS.map(k => clean(d[k]))));
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error: " + err);
  } finally {
    lock.releaseLock();
  }
}

// Store user input as plain text: cap the length and stop values such as
// "=HYPERLINK(...)" from being treated as spreadsheet formulas.
function clean(v) {
  const s = String(v == null ? "" : v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
