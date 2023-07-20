const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT;
if (process.env.NODE_ENV === 'local') {
  app.use(
    cors({
      origin: 'http://127.0.0.1:5173',
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
  app.use(express.static(path.join(__dirname, './frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, './', 'frontend', 'dist', 'index.html')
    );
  });
}
const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DB_URI);
    console.log(`production database is connected ...`);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
dbconnect();
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
