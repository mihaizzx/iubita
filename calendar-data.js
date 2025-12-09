// Date pentru fiecare zi din calendar
const calendarData = {
    1: {
        image: "images/calendar1.png",
        memory: "",
        message: "Esti cea mai superba femeie din univers",
        task: ""
    },
    2: {
        image: "images/calendar2.png",
        memory: "",
        message: "Te iubesc super extra foarte enorm de mult!",
        task: ""
    },
    3: {
        image: "images/calendar3.png",
        memory: "",
        message: "Esti cea mai tare persoana pe care am cunoscut-o vreodata",
        task: ""
    },
    4: {
        image: "images/calendar4.png",
        memory: "",
        message: "Iubesc sa ma pierd de fiecare data in ochii tai frumosi",
        task: ""
    },
    5: {
        image: "images/calendar5.png",
        memory: "",
        message: "Tu esti safe-place ul meu",
        task: ""
    },
    6: {
        image: "images/calendar6.png",
        memory: "",
        message: "Iubesc sa radem impreuna",
        task: ""
    },
    7: {
        image: "images/calendar7.png",
        memory: "",
        message: "Iubesc sa ne simtim bine!",
        task: ""
    },
    8: {
        image: "images/calendar8.png",
        memory: "",
        message: "Iti iubesc pupiciii!",
        task: ""
    },
    9: {
        image: "images/calendar9.png",
        memory: "",
        message: "Iubesc fiecare minut pe care il petrecem impreuna",
        task: ""
    },
    10: {
        image: "images/calendar10.png",
        memory: "",
        message: "Mi-e dor de noi, te iubesc!",
        task: ""
    },
    11: {
        image: "images/calendar2.png",
        memory: "Prima noastră aventură împreună",
        message: "Ziua 11 - Cu tine, fiecare clipă devine o poveste de neuitat.",
        task: "Planificăm următoarea noastră aventură!"
    },
    12: {
        image: "images/calendar3.png",
        memory: "Când m-ai îmbrățișat și totul a devenit bine",
        message: "Ziua 12 - Îmbrățișările tale sunt remediul meu pentru orice zi grea.",
        task: "Astăzi îți dau cele mai lungi îmbrățișări!"
    },
    13: {
        image: "images/calendar4.png",
        memory: "Acel moment spontan care ne-a făcut să râdem",
        message: "Ziua 13 - Spontaneitatea ta aduce culoare în viața mea.",
        task: "Facem ceva spontan și nebunesc astăzi!"
    },
    14: {
        image: "images/calendar5.png",
        memory: "Când am gătit împreună pentru prima dată",
        message: "Ziua 14 - Tot ce facem împreună devine special.",
        task: "Pregătim desert împreună!"
    },
    15: {
        image: "images/calendar6.png",
        memory: "Prima ta vizită la familia mea",
        message: "Ziua 15 - Te-ai integrat perfect în viața mea și în inima mea.",
        task: "Povestim despre viitorul nostru împreună."
    },
    16: {
        image: "images/calendar7.png",
        memory: "Când am făcut planuri mari pentru viitor",
        message: "Ziua 16 - Viitorul alături de tine este tot ce îmi doresc.",
        task: "Scriem împreună 5 obiective pentru anul viitor."
    },
    17: {
        image: "images/calendar8.png",
        memory: "Acea zi când m-ai surprins cu gesturi mici",
        message: "Ziua 17 - Gesturile tale mici înseamnă totul pentru mine.",
        task: "Îți fac un masaj relaxant astăzi!"
    },
    18: {
        image: "images/calendar9.png",
        memory: "Când am petrecut toată ziua în pat vorbind și râzând",
        message: "Ziua 18 - Timpul petrecut cu tine nu este niciodată suficient.",
        task: "Ziua de relax totală - facem ce ne place!"
    },
    19: {
        image: "images/calendar1.png",
        memory: "Prima vacanță împreună",
        message: "Ziua 19 - Fiecare călătorie cu tine este o poveste de dragoste.",
        task: "Alegem destinația pentru următoarea vacanță!"
    },
    20: {
        image: "images/calendar2.png",
        memory: "Când m-ai ascultat cu răbdare",
        message: "Ziua 20 - Mulțumesc că mă asculți și mă înțelegi întotdeauna.",
        task: "Astăzi te ascult pe tine - spune-mi tot ce vrei!"
    },
    21: {
        image: "images/calendar3.png",
        memory: "Acel moment când mi-ai citit gândurile",
        message: "Ziua 21 - Conexiunea noastră este specială și unică.",
        task: "Jucăm un joc împreună în seara asta!"
    },
    22: {
        image: "images/calendar4.png",
        memory: "Când am făcut decorațiuni de Crăciun împreună",
        message: "Ziua 22 - Tradițiile noastre sunt cele mai frumoase amintiri.",
        task: "Bem ciocolată caldă cu bezele!"
    },
    23: {
        image: "images/calendar5.png",
        memory: "Ultima noastră aventură memorabilă",
        message: "Ziua 23 - Fiecare zi cu tine este o aventură minunată.",
        task: "Facem planuri pentru Ajun și Crăciun!"
    },
    24: {
        image: "images/calendar6.png",
        memory: "Toate momentele frumoase petrecute împreună",
        message: "Ziua 24 - Mâine este ziua specială... dar tu ești special(ă) în fiecare zi!",
        task: "Ne pregătim împreună pentru cea mai frumoasă zi!"
    },
    25: {
        image: "images/calendar7.png",
        memory: "Toate amintirile noastre împreună",
        message: `
            <div class="special-modal-content">
                <div class="snowflakes" aria-hidden="true">
                    <div class="snowflake">❄</div>
                    <div class="snowflake">❄</div>
                    <div class="snowflake">❄</div>
                    <div class="snowflake">❄</div>
                </div>
                <h2 class="special-modal-title">Pentru Tine, Iubirea Mea ❤️</h2>
                <div class="special-modal-message">
                    <p>Am ajuns la finalul acestui calendar Advent, dar călătoria noastră de dragoste abia începe.</p>
                    <p>În aceste 25 de zile am vrut să-ți arăt cât de mult înseamnă pentru mine fiecare moment petrecut împreună.</p>
                    <p>Tu ești cel mai frumos cadou pe care l-am primit vreodată.</p>
                    <p>Te iubesc astăzi, mâine și pentru totdeauna.</p>
                    <p style="margin-top: 2rem; font-size: 1.5rem; color: var(--wine-red);">Crăciun Fericit, dragostea mea! 🎄✨</p>
                </div>
                <div class="special-modal-question">
                    <p>Vrei să continuăm 'Adventul nostru' și anul viitor?</p>
                    <p style="margin-top: 1rem; font-size: 2rem;">💝</p>
                    <p style="margin-top: 1rem; font-style: italic; font-size: 1rem;">
                        P.S.: Ai un cadou special care te așteaptă... Caută sub brad! 🎁
                    </p>
                </div>
            </div>
        `,
        task: ""
    }
};