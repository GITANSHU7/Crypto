import mongoose from "mongoose";

const currencySchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price_change_percentage_24h: {
      type: Number,
      required: true,
    },
    total_volume: {
      type: Number,
      required: true,
    },
    market_cap_rank: {
      type: Number,
      required: true,
    },
    market_cap: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Currency = mongoose.models.currency || mongoose.model('currency', currencySchema);

// export default License;

// const Currency = mongoose.model("Currency", currencySchema);

export default Currency;
