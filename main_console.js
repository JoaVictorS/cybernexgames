const main_consoles = [
  {
    url: ".//assets//nintendo.svg",
    name: "Nintendo Switch",
    price: "1299",
},
{
    url: ".//assets//playstation5.svg",
    name: "PlayStation 5",
    price: "2499",
},
{
    url: ".//assets//headset_gamer.svg",
    name: "Headset Gamer",
    price: "80",
},
{
    url: ".//assets//monitor_gamer.svg",
    name: "Monitor Gamer Acer Nitro",
    price: "80",
},
{
    url: ".//assets//teclado_gamer.svg",
    name: "Teclado Mecânico RGB",
    price: "80",
},
]

main_consoles.forEach(({ url, name, price }) => {
  const game_container = document.querySelector("#consoles_cards")

  const card = `<div class="game_card">
  <img src="${url}" alt="${name}">
  <h3>${name}</h3>
  <div class="price">
    <p>R$ <span>${price},00</span></p>
  </div>
</div>`

  game_container.innerHTML += card
})
