module.exports = function buildMakeBook(){
    return function MakeBook({
        title,
        author,
        publisher,
        pages
    }= {}){
        return Object.freeze ({
            getBookTitle: ()=> title,
            getBookAuthor: ()=> author,
            getBookPublisher: ()=> publisher,
            getBookPages: ()=> pages
        })
    }
}
