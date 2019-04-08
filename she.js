String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const btn = document.querySelector('.nextBtn')
const drawTaskBtn = document.querySelector('.drawTaskBtn')


const mission = [
    'Gdy w najbliższym czasie powiem Ci żebyś mnie zaspokoił, zawiążesz mi oczy, skrępujesz ręce i zajmiesz się mną od początku do samego końca. Musisz się skupić wyłącznie na mnie!',

    'Spełnisz moją fantazję erotyczną! Pamiętaj, że to ja wygrałam i nie możesz mi niczego odmówić! Zawsze chciałam... (uzupełnij)',

    `Przez cały najbliższy weekend zrobisz mi prawdziwy "dzień kobiet". Zadbasz o to abym nie musiała nic robić. Będziesz chodził po zakupy, zorganizujesz jakieś posiłki, a wieczorami zadbasz abym to ja była w pełni zaspokojona.`,

    `Przez najbliższe trzy dni będziesz wysyłał romantyczno-erotyczne smsy. Przynajmniej 3 dziennie. Postarasz się mnie na nowo zdobyć i rozpalić. Potraktuj to jak flirt.`,

    `Zorganizujesz mi jutro romantyczny wieczór. Wanna pełna piany z płatkami róż, kolacja przy świecach z winem. Po wszystkim pójdziemy do łóżka gdzie spełnisz moje zachcianki.`,

    `W ciągu najbliższego miesiąca spełnisz 5 moich zachcianek erotycznych. Wezmę 5 karteczek, które ty teraz podpiszesz. Będę na nich pisać to na co będę miała w danym momencie ochotę. Jak oddam Ci wypełnioną karteczkę będziesz musiał spełnić to co jest tam napisane. Bezwzględnie!`,

    `Zrobisz mi jutro 30 minutowy masaż całego ciała. Zadbasz o nastrój, olejki i wszystko inne. W ostatnich 10 minutach skupisz się na masowaniu mnie w bardziej "przyjemny" sposób tak abym miała z tego dużo radości.`,

    `Pewnego dnia jak będziemy leżeć w łóżku poproszę Cię abyś zrobił mi dobrze. Zaspokoisz mnie przy pomocy ust, języka, swoich dłoni i wibratora. Tego wieczoru będę liczyła się tylko ja! Po wszystkim po prostu pójdziemy spać.`,

    `Zabierzesz mnie w tygodniu do jakiejś eleganckiej restauracyjki, ubierzemy się ładniej, a po powrocie zadbasz o odpowiedni nastrój do romantycznego seksu.`,

    `Spełnisz moją zachciankę polegającą na kochaniu się w nietypowym miejscu. Zawsze chciałam to zrobić w ... (uzupełnij)`,

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
    let name = document.querySelector('.womanName').value
    let task = document.querySelector('.task').value
    sessionStorage.setItem('womanName', name);
    sessionStorage.setItem('womanTask', task);
    location.href = 'he.html';
}