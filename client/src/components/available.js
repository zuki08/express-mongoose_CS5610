export default function ShowStatus({handleContent}) {

    function handleShowStatus() {
        handleContent('available')
    }
    return(
        <button onClick={handleShowStatus}> Show Status </button>
    )
}