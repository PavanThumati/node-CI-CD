const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from your JSON API!",
    status: "success",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`JSON app listening at http://localhost:${port}`);
});
