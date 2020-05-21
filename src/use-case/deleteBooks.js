module.exports = function  makeDeleteBook({bookDB}){
    return async function deleteBook(id){
        await bookDB.deleteBook(id)
    }
}