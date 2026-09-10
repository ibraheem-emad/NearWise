const express = require('express');
const userId = require('./middleware/userId');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(userId);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});