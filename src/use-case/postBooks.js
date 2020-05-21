module.exports = function makePostBook ({bookDB}){
    return async function postBooks(title, author, publisher, pages){
        await bookDB.insertBook(title, author, publisher, pages)
    }
}