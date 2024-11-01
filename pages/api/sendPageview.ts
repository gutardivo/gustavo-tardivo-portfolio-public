// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'

type Data = {
  status: boolean
}

const GOOGLE_SERVICE_ACCOUNT = process.env.GOOGLE_SERVICE_ACCOUNT
const GOOGLE_KEY = process.env.GOOGLE_KEY
const SPREADSHEET_ID = process.env.SPREADSHEET_ID

const appendSpreadsheet = async (data: any) => {
  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT,
    key: GOOGLE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })
  const sheet = google.sheets("v4")
  await sheet.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    auth: auth,
    range: "Portfolio",
    valueInputOption: "RAW",
    requestBody: {
      values: [data]
    }
  })
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == 'POST') {
      try {
        const { origin, page, useragent, utm, location } = req.body;
        const date = new Date();
  
        //google sheets
        await appendSpreadsheet([date, page, utm, origin, useragent, location])

        res.status(200).json({ status: true });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: false });
      }
    } else {
        res.status(200).json({ status: false })
    }
}
