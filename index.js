const express = require('express')
const cookieParser = require('cookie-parser')
const os = require('os')
const app = express()
const port = 3000
const host = '0.0.0.0'

app.use(cookieParser())
app.get('/', (req, res) => {
    if (req.cookies == undefined) {
        count = 0
    }
    else if (req.cookies.count == undefined){
        count = 0
    }
    else {
        count = parseInt(req.cookies.count)
    }
    console.log('cookies:', req.cookies)
    console.log('cookies.count:', count)
    res.cookie('count', ++count)
    res.send(`ok|${os.hostname()}|${count}`)
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}!`)
})
