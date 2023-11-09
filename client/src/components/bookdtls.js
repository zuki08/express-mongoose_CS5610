export default function BookDetail({book, handleContent}) {
    function handleClick() {
        let bookId = book.split(':')[0].trim();
        handleContent('book_dtls', bookId);
    }
    return (
        <button onClick={handleClick}> View Detail </button>
    )
}