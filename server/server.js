import express from "express"
import cors from "cors"
import { apiresponse } from "./src/utils/apiresponse.js"
import { asyncHandler } from "./src/utils/Asynchandler.js"
import Dotenv  from "dotenv"
import { GeminiController } from "./src/controller/gemini.js"
Dotenv.config()
const app = express()


app.use(cors())
app.use(express.json())

// API routes
app.post('/api/gemini', GeminiController)

// Root route
app.get('/', (req, res) => {
  res.send('hlo');
});


const port = process.env.PORT || 5001 
app.listen(port ,() => {
    console.log(`your server is running on ${port}`);
    
})