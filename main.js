function createGame(player1, hour, player2){
  return `<li>
                            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                            <strong>${hour}</strong>
                            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
                        </li>`
}

let delay = -0.4;
function createCard (date, day, games) {
  delay = delay + 0.4;
  return `<div class="card" style="animation-delay:${delay}s">
                    <h2>${date}<span>${day}</span></h2>

                    <ul>
                      ${games}
                    </ul>
                    </div>`
}
document.querySelector("#cards").innerHTML = 
          
                createCard(
                  "24/11",
                  "quinta",
                  createGame("brasil", "16:00", "serbia")+
                  createGame("portugal", "13:00", "ghana")+
                  createGame("switzerland", "07:00", "cameroon")+
                  createGame("koreia", "10:00", "uruguay")
                )+
                createCard(
                  "28/11",
                  "segunda",
                  createGame("switzerland", "13:00", "brasil") +
                  createGame("portugal", "16:00", "uruguay")+
                  createGame("koreia", "10:00", "ghana")+
                  createGame("cameroon", "7:00", "serbia")
                )+
                createCard(
                  "02/12",
                  " sexta",
                  createGame("brasil", "16:00", "cameroon")+
                  createGame("uruguay", "12:00", "ghana")+
                  createGame("serbia", "16:00", "switzerland")+
                  createGame("koreia", "12:00", "portugal")
                )