const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV === 'local') {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}
if (process.env.NODE_ENV === 'produection') {
  app.use(express.static(path.join(__dirname, './frontend')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './', 'frontend', 'index.html'));
  });
}
const dbconnect = async () => {
  try {
    if (process.env.NODE_ENV === 'local') {
      await mongoose.connect(process.env.LOCAL_DB_URI);
      console.log(`local database is connected ...  `);
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log(`production database is connected ...  `);
    }
  } catch (error) {
    console.log('database connection faild');
  }
};
dbconnect();
app.listen(port, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
