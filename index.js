require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!!!!!!!!!!!');
});

const port = process.env.PORT || 3033;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
