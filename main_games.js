const main_games = [
  {
    url: "https://cdn-iaabn.nitrocdn.com/ggBlHlJLaixpGSIFXZlpdUFmGyjJOMjy/assets/images/optimized/rev-e6adafc/wp-content/uploads/2022/11/imagem_2022-11-10_123206640-1.png",
    name: "God of War Ragnarök",
    price: "150",
  },
  {
    url: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
    name: "Assassin’s Creed Valhalla",
    price: "200",
  },
  {
    url: "https://cdn1.epicgames.com/0a84818055e740a7be21a2e5b6162703/offer/WatchDogs_Legion_Store_Landscape_2560x1440-2560x1440-6564aab7daeb17650e7fc190714bba76.jpg",
    name: "Watch Dogs Legion",
    price: "80",
  },
  {
    url: "https://cdn1.epicgames.com/undefined/offer/lego-batman-3-promo-1536x864-95b599046d5092526a6862774e4d874c.jpg",
    name: "Lego Batman 3",
    price: "40",
  },
  {
    url: "https://tm.ibxk.com.br/2021/10/22/22131925025386.jpg",
    name: "GTA Triology",
    price: "250",
  },
]

main_games.forEach(({ url, name, price }) => {
  const game_container = document.querySelector("#games_card")

  const card = `<div class="game_card">
  <img src="${url}" alt="${name}">
  <h3>${name}</h3>
  <div class="price">
    <p>R$ <span>${price},00</span></p>
  </div>
</div>`

  game_container.innerHTML += card
})
