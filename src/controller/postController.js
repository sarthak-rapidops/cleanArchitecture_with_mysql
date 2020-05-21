module.exports = function makePostBook (postBooks){
    return async function postBook(httpRequest){
        try {
            const {...bookInfo} = httpRequest.body
            console.log("book", bookInfo)
            const posted = await postBooks(bookInfo.title, bookInfo.author, bookInfo.publisher, bookInfo.pages)
            return {
                headers:{
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: "Book added successfully"
            }
        } catch (error) {
            return{
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