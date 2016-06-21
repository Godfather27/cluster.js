const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('server is running on http://localhost:3000');
});