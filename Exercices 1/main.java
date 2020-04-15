class Playground {
    public static void main(String[ ] args) {
        Ticket event = new Ticket("Daft Punk", "06.06.2020", 199.99, "Paris bercy", 4552);
        Ticket event1  = new Ticket("Michael Jackson", "02.09.2021", 299.99, "Orange Velodrome");
        System.out.println(event);
    }

    class Ticket {
    String artist;
    String date;
    int price;
    String venue;
    int numberTicket;

    Ticket(String artist, String date, Number price, String venue, Number numberTicket?) {
        this.artist = artist;
        this.date = date;
        this.price = price;
        this.venue = venue;
        if(numberTicket){
            this.numberTicket = numberTicket
        };
    };
     String htmlDetails(){
        String htmlContent =
        System.out.print(`<p> Nom de l'artiste : ${this.artist}</p>
        <p> Date de l'évenement : ${this.date}</p>
        <p> Prix : ${this.price}</p>
        <p> Lieu: ${this.venue}</p>`;
        if(this.numberTicket != ""){
            htmlContent = htmlContent + `<p>Numéro du billet: ${this.numberTicket}</p>`
        };)

        return (htmlContent);
    }
}
