import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbconfig";
import Crypto from "@/models/currencyModal";

connect();

export async function POST(request: NextRequest) {
   
    try {
      const { searchParams } = new URL(request.url);
      const page = searchParams.get("page");
      const per_page_record = searchParams.get("per_page_record");
  
      let coins;
      let total;
  
      if (page && per_page_record) {
        const pageInt = parseInt(page);
        const perPageRecordInt = parseInt(per_page_record);
        const startIndex = (pageInt - 1) * perPageRecordInt;
        total = await Crypto.countDocuments();
        coins = await Crypto.find()
        .sort({ market_cap_rank: 1 }) 
          .sort({ createdAt: -1 })
          .skip(startIndex)
          .limit(perPageRecordInt);
      } else {
        coins = await Crypto.find().sort({ market_cap_rank: 1 }) ;
        total = coins.length;
      }
  
      return NextResponse.json({
        message: "Crypto list retrieved successfully",
        data: coins,
        total: total,
        success: true,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
