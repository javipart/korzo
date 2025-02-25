import { useState, useEffect } from "react";

import { Container, Typography } from "@mui/material";

import { SimpleLayout } from "src/layouts/simple";
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
    try {
      const getData = async () => {
        const stockData = await getAAPLStockPrices();
        setData(stockData);
      }

      getData();
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Apple Stock Prices 📈💰
      </Typography>
      {data.categories.length > 0 ? (
        <AnalyticsAppleStock
          title="Stock Prices"
          subheader="Last 12 Months"
          chart={data}
        />)
        : (
          <Container>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Sorry, The data could not be obtained
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Try again later
            </Typography>
          </Container>
        )}
    </DashboardContent>
  );
}