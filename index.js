const arrEmo = ["😊","😂","🤣","😍","😒","👌","😘","💕","😁","😉","😎","🎶","😢","😪","🤐","😶‍🌫️",
    "😝","🤤","😒","🫠","🙃","🫤","😕","😔","😓","🤑","😲","☹️","🙁","😖","😞","😨","😩","🤯","😬",
    "😮‍💨","😰","😱","😳","🥶","🤪","😵","😠","😡","🤬","😷","🤒","🤕","🤢","🤮","🤧",
    "😇","🥳","🥸","🥺","🤠","🤡"]

const ranEmoji = document.querySelector(".emoji")

ranEmoji.addEventListener("click", () => {
    const ranNum = Math.floor(Math.random() * arrEmo.length)
    ranEmoji.innerHTML = arrEmo[ranNum]   
})


