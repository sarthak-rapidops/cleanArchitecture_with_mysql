const config = require ('../config/dbconfig')
module.exports = function makeExpressCallback(controller){

    return (req, res)=>{
        const httpRequest= {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            header:{
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
            }
        }    
        controller(httpRequest)
        .then(httpResponse=>{
            res.type('json')
            res.status(httpResponse.statusCode).send(httpResponse.body)
        })
        .catch(err=>{
            res.status(500).send({error:"An unkown error occurred"})
        })
    }
}