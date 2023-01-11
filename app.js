let http = require("http")



http.createServer((req,res)=>{
    res.writeHead(200,{'Content': 'text/plain'})
    // Conteudo
    res.end('Hello,World')
}).listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('servidor rodando')
    }
})