"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

export async function submitEmail(email) {
    try {
        // Get environment variables
        const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
        // FIX 1: Trim all whitespace from the key to prevent hidden characters causing auth failure
        const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.trim()
        const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID
        console.log(GOOGLE_SERVICE_ACCOUNT_EMAIL)

        // Check if we have the required environment variables
        if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
            console.error("Missing required environment variables for Google Sheets integration")
            return {
                success: false,
                message: "Server configuration error. Please contact support.",
            }
        }

        try {
            // Set up authentication
            const serviceAccountAuth = new JWT({
                email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
                // FIX 2: Check for private key and use a more robust replacement/trimming method
                // We are already trimming above, but keep the replace for multiline keys.
                key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            })

            // Initialize the sheet
            console.log("Initializing GoogleSpreadsheet...")
            const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth)
            console.log("Loading sheet info...")
            await doc.loadInfo()
            console.log("Sheet info loaded successfully. Sheet title:", doc.title)

            // Get the first sheet
            // FIX 3: Ensure the header row is loaded if not already. 
            // It's good practice to ensure the sheet has headers 'email' and 'timestamp'.
            const sheet = doc.sheetsByIndex[0]
            await sheet.loadHeaderRow() // Ensure headers are loaded and correct
            console.log("Accessing sheet:", sheet.title)
            console.log("Detected headers:", sheet.headerValues) // Check the headers

            // Verify if the headers match the expected row data keys
            const expectedHeaders = ['email', 'timestamp'];
            const hasExpectedHeaders = expectedHeaders.every(h => sheet.headerValues.includes(h));

            if (!hasExpectedHeaders) {
                console.error("Sheet headers are incorrect. Expected:", expectedHeaders, "Found:", sheet.headerValues);
                return {
                    success: false,
                    message: "Sheet setup error. Check header names.",
                };
            }

            console.log("Attempting to add row:", { email, timestamp: new Date().toISOString() })

            // Add a row with the email and timestamp
            await sheet.addRow({
                email,
                timestamp: new Date().toISOString(),
            })
            console.log("Row added successfully to Google Sheet.")

            return {
                success: true,
                message: "Email successfully added to waitlist",
            }
        } catch (googleError) {
            // FIX 4: Use a utility function to log the error, 
            // including non-enumerable properties like 'message'.
            const errorDetails = googleError.message || googleError.toString() || "Unknown API Error";
            console.error("Google Sheets API error. Details:", errorDetails);

            // Log the full error for debugging, using a simple toString as fallback
            console.error("Full error object:", googleError);

            // Return failure
            return {
                success: false,
                message: "Failed to add email to waitlist due to a server error. Please try again later.",
            }
        }
    } catch (error) {
        console.error("General submission error:", error.message || error.toString())
        return {
            success: false,
            message: "Failed to submit email"
        }
    }
}
