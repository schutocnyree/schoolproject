const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// start server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
