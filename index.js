const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3001

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
    res.send('ok|' + count)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
