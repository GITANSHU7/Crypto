// src/cron.ts

// import { fetchAndSaveCryptoData } from '';
// import dotenv from 'dotenv';
import { fetchAndSaveCryptoData } from '@/app/api/crypto/save/route';
import cron from 'node-cron'

// dotenv.config();

const vs_currency = 'usd';

// Schedule the task to run every 5 seconds
cron.schedule('*/5 * * * * *', () => {
  console.log('Running scheduled task...');
  fetchAndSaveCryptoData(vs_currency);
});

console.log('Cron job scheduled');
