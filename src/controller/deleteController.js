module.exports = function makeDeleteBook(deleteBook){
    return async function deletebook(httpRequest){
        try {
            const id = httpRequest.params.id
            const posted = await deleteBook(id)
            return {
                header:{
                    'Content-Type':'application/json'
                },
                statusCode: 201,
                body:"Deleted successfully"
            }
        } catch (error) {
            return {
                header:{
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body:{
                    Error: error.message
                }
            }            
        }
    }
}