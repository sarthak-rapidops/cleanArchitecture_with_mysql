module.exports = async function makeGetBooks({bookDB}){
    const response = await bookDB.findAll()
    console.log(response)
    if(response){
        return{
            title: response.title,
            author: response.author,
            publisher: response.publisher,
            pages: response.pages
        } 
    } else{
        return false
    }
}