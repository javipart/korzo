import axios from 'axios';

import { CONFIG } from 'src/config-global';

const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=AAPL&apikey=${CONFIG.apiKey}`;

const getMonthName = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", { month: "short" });
};

interface MonthlyAdjustedTimeSeries {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. adjusted close": string;
    "6. volume": string;
    "7. dividend amount": string;
  };
}

interface AlphaVantageResponse {
  "Meta Data": Record<string, string>;
  "Monthly Adjusted Time Series": MonthlyAdjustedTimeSeries;
}

interface ChartData {
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
}

export const getAAPLStockPrices = async (): Promise<ChartData> => {
  try {
    const response = await axios.get<AlphaVantageResponse>(API_URL);
    const dataMonhly = response.data["Monthly Adjusted Time Series"];
    if (!dataMonhly) throw new Error('Error fetching data');
    const sortedDates = Object.keys(dataMonhly).sort().slice(-12);

    const chartData: ChartData = {
      categories: sortedDates.map(getMonthName),
      series: [
        {
          name: "Open",
          data: sortedDates.map((date) => parseFloat(dataMonhly[date]["1. open"])),
        },
        {
          name: "Close",
          data: sortedDates.map((date) => parseFloat(dataMonhly[date]["4. close"])),
        },
      ],
    };

    return chartData;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return { categories: [], series: [] };
  }
};
