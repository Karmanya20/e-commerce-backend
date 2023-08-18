const connecttoMongo=require('./db');
const express = require('express')
connecttoMongo();
const app = express()
const port = 3000
app.use(express.json())
 app.use('/api/auth', require('./routes/user'));
app.use('/api/category',require('./routes/category'));
app.use('/api/products',require('./routes/products'));
app.use('/api/cart',require('./routes/cart'));
app.use('/api/orders',require('./routes/order'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})