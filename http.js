const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    // console.log('req:',req)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('May The Force Be With You,')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

http.get('http://127.0.0.1:3000/', '', (res) => {
    // console.log(res)
    let rawData = ''
    res.on('data', (data) => {
        rawData += data
    })
    res.on('end', () => {
        console.log(rawData)
    })
})
