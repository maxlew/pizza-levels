import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "./error";
import PizzaController from "./components/pizza-controller";

// If I had more time I'd type this properly or find someone elses
type PoorlyTypedGoogleSheetRow = {
  values: {
    formattedValue: string;
    effectiveValue: {
      numberValue: number;
    }
  }[]
}

const getSheet = async (): Promise<PizzaData[]> => {
  // Note this has an artificial cap at 40 rows due to the range needing to be included
  // At that point I probably should stop using Google Sheets and use MySQL
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.PIZZA_SHEET_ID}?key=${process.env.GSHEETS_API_KEY}&includeGridData=true&ranges=A2:D40`)
    .then(res => res.json())
    .then(sheet => sheet.sheets[0].data[0].rowData)
    .then(sheetData => sheetData.map(parseGoogleSheetsRow).filter(Boolean))
    .catch((err) => {
      console.error(err);
      throw new Error('Error requesting data from Google Sheet');
    })
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

export default async function App() {
  const pizzaData = await getSheet();

  return (
    <ErrorBoundary errorComponent={ErrorComponent}>
      <PizzaController pizzaData={pizzaData} />
    </ErrorBoundary>
  );
}
