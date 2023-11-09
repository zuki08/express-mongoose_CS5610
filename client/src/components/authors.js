export default function ViewAuthor({handleContent}) {

    function handleViewAuthors() {
        handleContent('authors')
    }
    return(
        <button onClick={handleViewAuthors}> View Authors </button>
    )
}