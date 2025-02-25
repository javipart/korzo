import { useState, useEffect } from "react";

import { Typography } from "@mui/material";

import { DashboardContent } from "src/layouts/dashboard";
import { getAAPLStockPrices } from "src/services/stock-services";

import { AnalyticsAppleStock } from "../analytics-apple-stock";

interface ChartData {
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
}

export function AAPLView() {
  const [data, setData] = useState<ChartData>({ categories: [], series: [] });

  useEffect(() => {
    const getData = async () => {
      const stockData = await getAAPLStockPrices();
      console.log(stockData)
      setData(stockData);
    }

    getData();
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Apple Stock Prices 📈💰
      </Typography>

      <AnalyticsAppleStock
        title="Stock Prices"
        subheader="Last 12 Months"
        chart={data}
      />
    </DashboardContent>
  );
}