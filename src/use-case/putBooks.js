module.exports = function makePutBook({bookDB}){
    return async function putBook(title, author, publisher, pages, id){
        await bookDB.updateBook(title, author, publisher, pages, id)
    }
}