document.querySelector("#nav_bar > nav > ul > li:nth-child(2)").addEventListener("click", (e) => {
    document.querySelector("#main_container").remove()
    document.querySelector("#games_container").remove()
    document.querySelector("#console_container").remove()

    e.target.style.backgroundColor = "var(--tertiary-color)"
    document.querySelector("header > h2").textContent = "Lojinha"

    document.querySelector("#nav_bar > nav > ul > li:nth-child(1)").style.backgroundColor = "var(--secondary-color)"


    const container = document.createElement("div")
    container.classList.add("games_container")
    console.log(document.querySelector("main"))
    document.querySelector("main").insertAdjacentElement("beforeend", container)

    showGames()

    const container_two = document.createElement("div")
    container_two.classList.add("console_container")
    console.log(document.querySelector("main"))
    document.querySelector("main").insertAdjacentElement("beforeend", container_two)

    const consoleTitle = document.createElement("h2")
    consoleTitle.textContent = "Consoles e Itens"
    consoleTitle.style.fontFamily = "var(--font-one)"
    consoleTitle.style.color = "#ffffff79"
    consoleTitle.style.marginTop = "6rem"
    consoleTitle.style.marginBottom = "3rem"
    consoleTitle.style.letterSpacing = "0.15rem"
    container_two.insertAdjacentElement("beforebegin", consoleTitle)

    const container_two_three = document.createElement("div")
    container_two_three.classList.add("console_container_true")
    container_two.insertAdjacentElement("beforeend", container_two_three)

    showConsoles()

})

function showGames() {

    const games = [
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
        {
            url: "https://cdn1.epicgames.com/offer/4750c68b2bfa4f43933b81cfd5cc510c/EGS_EASPORTSFC24StandardEdition_EACanada_S1_2560x1440-f1772618b782ca975f0bbe33db3a88b3",
            name: "EA Sports FC 24",
            price: "129",
        },
        {
            url: "https://jornalmetropolitanorio.com.br/wp-content/uploads/2022/06/idmjlql391g51.png",
            name: "Resident Evil 4",
            price: "199",
        },
        {
            url: "https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=750&format=.jpg&quality=91&imagick=uploads.adrenaline.com.br/2024/03/Marvels-Spider-Man-2-recebe-New-Game-e-novas-roupas.jpg",
            name: "Marvel’s Spider-Man 2",
            price: "249",
        },
        {
            url: "https://meups.com.br/wp-content/uploads/2016/05/Uncharted-4_PS4.jpg",
            name: "Uncharted 4",
            price: "79",
        },
    ]

    games.forEach(({ url, name, price }) => {
        const game_container = document.querySelector(".games_container")

        const card = `<div class="game_card">
        <img src="${url}" alt="${name}">
        <h3>${name}</h3>
        <div class="price">
          <p>R$ <span>${price},00</span></p>
        </div>
      </div>`

        game_container.innerHTML += card
    })
}

function showConsoles() {
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
        {
            url: ".//assets//xbox_series_x.svg",
            name: "Xbox Series X",
            price: "2799",
        },
        {
            url: ".//assets//controle_play4.svg",
            name: "Controle de PlayStation 4",
            price: "199",
        },
        {
            url: ".//assets//xbox_series_s.svg",
            name: "Xbox Series S",
            price: "1499",
        },
        {
            url: ".//assets//play4_slim.svg",
            name: "PlayStation 4 Slim",
            price: "1999",
        },
    ]

    main_consoles.forEach(({ url, name, price }) => {
        const console_container = document.querySelector(".console_container_true")

        const card = `<div class="game_card">
        <img src="${url}" alt="${name}">
        <h3>${name}</h3>
        <div class="price">
          <p>R$ <span>${price},00</span></p>
        </div>
      </div>`

        console_container.innerHTML += card
    })

}

document.querySelector("#nav_bar > nav > ul > li:nth-child(1)").addEventListener("click", () => {
    window.location.reload()
})