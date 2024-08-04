"use client";

import { setCoinData } from "@/lib/CoinData/coinDataSlice";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const coins = useSelector((state: any) => state.coinDataSlice);

  const fetchCoins = async () => {
    try {
      const response = await axios.post(`/api/crypto/list`);
      const { data } = response.data;
      dispatch(
        setCoinData({
          coins: data,
          total: data.length,
          success: true,
        })
      );
    } catch (error: any) {
      dispatch(
        setCoinData({
          coins: [],
          total: 0,
          success: false,
        })
      );
    }
  };

  const saveCoins = async () => {
    try {
      await axios.get("/api/crypto/save");
      fetchCoins();
    } catch (error: any) {
      console.error(error);
    }
  }

  // const saveCoins = async () => {
  //   try {
  //     // Include query parameters in the POST request URL
  //     const response = await axios.post("/api/crypto/save",);
      
  //     console.log("Save response:", response.data); // Log the response to ensure it’s successful
  //     fetchCoins(); // Fetch updated data after saving
  //   } catch (error: any) {
  //     console.error("Error saving coins data:", error.response?.data || error.message); // Log detailed error
  //   }
  // };
  

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleLoadCoin = () => {
    saveCoins();
  };

  return (
    <div className="p-4">
      <h1 className="my-10 ml-7 text-xl font-semibold dark:text-white">
        Crypto List
        <div className="float-right rtl:float-left">
          <Button onClick={() => {handleLoadCoin()}}>Refresh Data</Button>
        </div>
      </h1>

      <div className="overflow-x-auto p-4">
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Symbol</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Market Cap Rank</Table.HeadCell>
            <Table.HeadCell>Total Volume</Table.HeadCell>
            <Table.HeadCell>Price Change (24h)</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {coins?.success ? (
              coins?.coins?.map((coin: any) => (
                <Table.Row key={coin._id} className="bg-white dark:bg-gray-800">
                  <Table.Cell>
                    <img src={coin.image} alt={coin.name} width="40" />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {coin.name}
                  </Table.Cell>
                  <Table.Cell>{coin.symbol}</Table.Cell>
                  <Table.Cell>${coin.price}</Table.Cell>
                  <Table.Cell>{coin.market_cap_rank}</Table.Cell>
                  <Table.Cell>{coin.total_volume}</Table.Cell>
                  <Table.Cell>{coin.price_change_percentage_24h}%</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <>
                {[...Array(10)].map((_, index) => (
                  <Table.Row key={index} className="bg-white dark:bg-gray-800">
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full animate-pulse"></div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
