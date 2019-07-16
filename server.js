const express = require('express')
const app = express()
const port = 3000



express.static(root, [options])

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log('Server is running at:',PORT);
  });