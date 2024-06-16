const express= require('express')
const cors = require('cors')
//***************connect db */
const mysql = require('mysql2')
require('dotenv').config()

const app = express()
const connection = mysql.createConnection(process.env.DATABASE_URL)



app.get('/',function(req,res,next){
    res.json({msg:'hello world'})
})
app.listen(process.env.PORT || 3000)


