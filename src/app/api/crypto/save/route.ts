import { NextRequest, NextResponse } from "next/server";
import Crypto from "@/models/currencyModal";
import { connect } from "@/dbConfig/dbconfig";
import axios from "axios";

connect();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const vs_currency = searchParams.get('vs_currency') || 'usd';
   
      // Delete all existing coins and load fresh data
      await Crypto.deleteMany({});
  
      // Fetch data from CoinGecko API
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency,
          order: 'market_cap_desc',
          sparkline: false,
          per_page:'20'
        },
      });
  
      const data = response.data;
  
      // Save each coin data to the database
      const savePromises = data.map(async (coin: any) => {
        const {
          id,
          symbol,
          name,
          image,
          current_price: price,
          market_cap,
          market_cap_rank,
          total_volume,
          price_change_percentage_24h,
        } = coin;
  
        const newCrypto = new Crypto({
          id,
          symbol,
          name,
          image,
          price,
          market_cap,
          market_cap_rank,
          total_volume,
          price_change_percentage_24h,
        });
  
        await newCrypto.save();
        console.log(`Data saved for ${name}`);
      });
  
      await Promise.all(savePromises);
  

    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}