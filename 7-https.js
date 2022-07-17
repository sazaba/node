const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        res.end('About')
    }
    else {res.end(`
    <a href='/'> Home </a>
    `)}
})

server.listen(5000)