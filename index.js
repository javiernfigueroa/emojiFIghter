let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    for(let i = 0; i< fighters.length; i++){
        let firstF = Math.floor(Math.random()*fighters.length)
        let secondF = Math.floor(Math.random()*fighters.length)
        stageEl.innerText = fighters[firstF] + ' VS ' + fighters[secondF];
    }
})
