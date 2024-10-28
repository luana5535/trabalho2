import express from 'express' 
import connectDB from './config/db.js'
//import explorer from './routers/explorerRouter.js'
import species from './routers/speciesRouter.js'
import expedition from './routers/expeditionRouter.js'


connectDB()

const app = express()
app.use(express.json())

//app.use('/Explorer', explorerRouter)
app.use('/Species', speciesRouter)
app.use('/Expedition', expeditionRouter)

app.listen(3000, () => console.log('Server running on port 3000'));