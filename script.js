// adiciona um event listener a todo o body da página
document.body.addEventListener("keyup", (event) => {
    // event.code capta a tecla que o usuário apertou
    // e é passada como parâmetro para a função playSound
    playSound(event.code.toLowerCase());
});

//seleciona o botão e adiciona um event listener de click
document.querySelector(".composer button").addEventListener("click", () => {
    //recebe o valor do input
    let song = document.querySelector("#input").value;

    // se o valor de input for diferente de vazio
    if (song !== "") {
        // songArray recebe o valor do input em formato de array
        let songArray = song.split("");

        // chama a função para tocar todo o input
        playComposition(songArray);
    }
});

// função que executa o som para cada tecla
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add("active");
        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}
