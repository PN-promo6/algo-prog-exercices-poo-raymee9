<?php

class ConcertTicket
{
  public $artist;
  public $city;
  public $date;
  public $placeNumber;
  public $name;

  function __construct($artist, $city, $date, $placeNumber, $name = null)
  {

    $this->artist = $artist;
    $this->city = $city;
    $this->date = $date;
    $this->placeNumber = $placeNumber;
    if (!is_null($name)) {
      $this->clientName = $name;
    }
  }

  function showTicketDetail()
  {
    $showTicketContent = "
    <p>Artiste : $this->artist </p>
    <p>Lieu du concert : $this->city </p>
    <p>Date du concert : $this->date </p>
    <p>Numero du billet : $this->placeNumber </p>
    ";
    if (!is_null($this->name)) {
      $showTicketContent = $showTicketContent + "<p>Détenteur du ticket : $this->name </p>";
    }
    return $showTicketContent;
  }
}
$ticket01 = new ConcertTicket("Daft punk", "Marseille", "06.06.20", "9");
echo ($ticket01->showTicketDetail());
