class Ticket {
    artist: string;
    date: string;
    price: number;
    venue: string;
    numberTicket: number;

    constructor(artist: string, date: string, price: number, venue: string, numberTicket?: number) {
        this.artist = artist;
        this.date = date;
        this.price = price;
        this.venue = venue;
        if(numberTicket){
            this.numberTicket = numberTicket
        };
    };
    htmlDetails(): string{
        let htmlContent: string = `
        <p> Nom de l'artiste : ${this.artist}</p>
        <p> Date de l'évenement : ${this.date}</p>
        <p> Prix : ${this.price}</p>
        <p> Lieu: ${this.venue}</p>`;
        if(this.numberTicket != ""){
            htmlContent = htmlContent + `<p>Numéro du billet: ${this.numberTicket}</p>`
        };
        return (htmlContent);
    }
}


let event: Ticket = new Ticket("Daft Punk", "06.06.2020", 199.99, "Paris bercy", 4552);
let event1: Ticket = new Ticket("Michael Jackson", "02.09.2021", 299.99, "Orange Velodrome");

console.log(event.htmlDetails());
console.log(event1.htmlDetails());