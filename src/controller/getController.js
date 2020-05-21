module.exports = function makeGetBooks (getBooks){
    return async function getbooks (httpRequest){
        const header = {
            'Content-Type': 'application/json'
        } 
        try {
            const getBook = await getBooks
            return{
                header,
                statusCode: 200,
                body: "Reterived Data"
            }
        } catch (error) {
            console.log(error)
            return {
                header, 
                statusCode: 400,
                body:{
                    Error: error.message
                }
            }
            
        }
    }
}