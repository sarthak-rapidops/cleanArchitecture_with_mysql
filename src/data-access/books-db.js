module.exports= function makeBooksDb ({con}){
    return Object.freeze({
        findAll,
        insertBook,
        updateBook,
        deleteBook
    })
    async function findAll(){
        con.connect(err=>{
            if(err) throw err
            console.log("Connected")
        })
        //const query = 
        const data = await con.promise().query(`SELECT * from book_db`)
        if(data){
            return data[0]
        } else{
            return "table is empty"
        }
    }
    async function insertBook(title, author, publisher, pages){
        con.connect(err=>{
            if(err) throw err
            console.log("Connected")
        })
        const book = {title, author, publisher, pages}
        const data = con.promise().query(`INSERT into book_db SET ?`, book)
        if(data){
            return data[0]
        } else{
            return null;
        }
    }
    async function updateBook(title, author, publisher, pages, id){
        con.connect(err=>{
            if(err) throw err
            console.log("Connected")
        })
        const book = [title, author, publisher, pages, id];
        const data = await con.promise().query(`UPDATE book_db SET title=? , author= ?, publisher= ?, pages= ? Where id= ?`, book)
        if(data) {
            return data[0]
        } else{
            return null
        }
    }
    async function deleteBook(id){
        con.connect(err=>{
            if(err) throw err
            console.log("Connected")
        })
        const data = await con.promise().query(`DELETE FROM book_db Where id= ?`, id)
        if(data){
            return data[0]
        } else{
            return null
        }
    }
}