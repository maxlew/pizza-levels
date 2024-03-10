// If i had more time I'd type this properly or find someone elses
type PoorlyTypedGoogleSheetRow = {
  values: any;
}

const getSheet = async (): Promise<PizzaData> => {
  // Note this has an artificial cap at 50 rows due to the range needing to be included
  // At that point I probably should stop using Google Sheets and use MySQL
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.PIZZA_SHEET_ID}?key=${process.env.GSHEETS_API_KEY}&includeGridData=true&ranges=A2:D50`)
    .then(res => res.json())
    .then(sheet => sheet.sheets[0].data[0].rowData)
    .then(sheetData => sheetData.map(parseGoogleSheetsRow).filter(Boolean))
    .catch(console.error)
}

const parseGoogleSheetsRow = (row: PoorlyTypedGoogleSheetRow): PizzaData | boolean => {
  if (typeof row.values[0].formattedValue === 'undefined') {
    // return blank row to be filtered out
    return false
  }
  return {
    restaurant: row.values[0].formattedValue,
    level: row.values[1].effectiveValue.numberValue,
    rating: row.values[2].effectiveValue.numberValue,
    notes: row.values[3].formattedValue,
  }
}

export async function GET() {
  const data = await getSheet();
  return Response.json({ data })
}
