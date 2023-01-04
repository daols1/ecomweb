require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoutes')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

app.use('/user', userRoute)
app.use('/api', categoryRoute)
app.use('/api', require('./routes/upload'))
app.use('/api', productRoute)


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDb')
})

const port = process.env.PORT 


app.listen(port, () => {
    console.log(`listening on ${port}`)
});

