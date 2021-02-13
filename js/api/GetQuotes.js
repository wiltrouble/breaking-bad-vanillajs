export default class Quotes {
    
    async getAllQuotes() {
        const quotes = await fetch("https://www.breakingbadapi.com/api/quotes")
        return quotes.json();
    }
}