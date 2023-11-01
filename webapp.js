const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World! version2')
})

app.get("/another_route", (req,res) =>{
    res.send("This is another route")
    console.log("a")
})

app.listen(port, () => {
  console.log(`Our app is listening on port ${port}`)
})
