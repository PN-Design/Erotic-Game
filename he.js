String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
const btn = document.querySelector('.nextBtn')
const drawTaskBtn = document.querySelector('.drawTaskBtn')

const mission = [

    `Przez cały jutrzejszy dzień będziesz chodziła w spódniczce i nie założysz majtek. Przez cały dzień! Niezależnie gdzie będziesz i co będziesz robiła. Kuś mnie przy każdej okazji by wieczorem się mną zająć do samego "końca"!`,

    `Gdy będziemy razem leżeć w łóżku rozbierzesz się do naga (bez mojej pomocy), po czym na moich oczach sama się zaspokoisz. Chcę zobaczyć Twój orgazm. Jak już będzie po wszystkim zajmiesz się mną przy pomocy ust i doprowadzisz mnie do finału.`,
    `W ciągu najbliższego miesiąca spełnisz 5 moich zachcianek erotycznych. Podpiszesz mi się teraz na 5 karteczkach. Ja w ciągu miesiąca będę na nich pisał swoje zachcianki erotyczne, które ty będziesz musiała spełnić. Jak dostaniesz karteczkę nie możesz się niczym wykręcać z wykonania zadania. Niczym!`,

    `Na moje zawołanie ubierzesz się w czarną koronkową bieliznę, założysz czarne pończochy i zajmiesz się mną w łóżku`,

    `Zadowolisz mnie oralnie w 3 miejscach poza domem, np.: w samochodzie na parkingu, w lesie i w publicznej toalecie.`,

    `Zrobisz striptiz, w takcie którego wspomagając się ręką i ustami doprowadzisz mnie do orgazmu.`,

    `Jutro wieczorem, gdy będę w pełni ubrany, Ty podejdziesz do mnie, na moich oczach rozbierzesz się zupełnie do naga, klękniesz przede mną, rozepniesz mi tylko rozporek i zrobisz mi dobrze ustami pozwalając abym finiszował na Twoich piersiach.`,

]

let table = []
let missions = mission.concat(table)
drawTaskBtn.addEventListener('click', () => {
    if (missions.length === 0) {
        missions = mission.concat(table)
    } else
        i = Math.floor(Math.random() * missions.length)
    document.querySelector('.task').value = missions[i]
    missions.splice(i, 1)
})

function getData() {
    let name = document.querySelector('.manName').value
    let task = document.querySelector('.task').value
    sessionStorage.setItem('manName', name);
    sessionStorage.setItem('manTask', task);
    location.href = 'game.html';
}