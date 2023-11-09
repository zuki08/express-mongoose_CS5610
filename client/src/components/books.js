export default function ViewBooks({handleContent}) {

    function handleViewBooks() {
        handleContent('books')
    }
    return(
        <button onClick={handleViewBooks}> View Books </button>
    )
}