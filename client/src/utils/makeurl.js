export default function makeUrl(type, id) {
    let contentUrl = 'http://localhost:8000/';
    if(type === 'authors')
        return contentUrl + type;
    if(type === 'books')
        return contentUrl + type;
    if(type === 'available')
        return contentUrl + type;
    if(type === 'book_dtls')
        return contentUrl + type + '?id=' + id;
}