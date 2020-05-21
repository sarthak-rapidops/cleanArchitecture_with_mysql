module.exports = function makePutBook(putBook){
    return async function putbook(httpRequest){
        try{
            const {...bookInfo} = httpRequest.body
            const id = httpRequest.params.id
            const posted = await putBook(bookInfo.title, bookInfo.author, bookInfo.publisher, bookInfo.pages, id)
            return {
                headers:{
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: "Updated"
            }
        }catch(error){
            return {
                headers:{
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