const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'staging';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

const connectDB = require('./config/db');
const itemService = require('./services/item.service');

const run = async () => {
  await connectDB();

  const created = await itemService.createItem({ name: 'Laptop', price: 999 });
  console.log('Created:', created);

  const items = await itemService.getAllItems();
  console.log('All items:', items);

  const updated = await itemService.updateItem(created._id, { price: 899 });
  console.log('Updated:', updated);

  await itemService.deleteItem(created._id);
  console.log('Deleted item:', created._id);

  process.exit(0);
};

run();