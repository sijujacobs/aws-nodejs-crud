const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const productRouter = require('./routes/product');
app.use(express.json());
app.use('/product', productRouter);

app.get('/', (req, res) => {
    res.send('<h2>WELCOME - AWS-NODE-CURD App </h2><h3>CI-CD</h3><h4>THANKS GIVING 6:40AM</h4>')
});
app.get('/health', (req, res) => {
    res.send()
});

app.listen(port, () => {
    console.log('YEYY!!! AWS-NODE-CURD App is UP and LISTENING to port : ', port);
})