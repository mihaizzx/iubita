// Date pentru fiecare zi din calendar
const calendarData = {
    1: {
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        memory: "Îți amintești prima noastră întâlnire? Parcă a fost ieri...",
        message: "Ziua 1 - Încă din prima clipă am știut că ești special(ă). Zâmbetul tău a luminat toată ziua mea.",
        task: "Astăzi ne facem o fotografie frumoasă împreună!"
    },
    2: {
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        memory: "Acel moment când am râs împreună până ne-au dat lacrimile",
        message: "Ziua 2 - Râsul tău este muzica preferată a inimii mele.",
        task: "Seara asta ne uităm la filmul nostru preferat împreună."
    },
    3: {
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800",
        memory: "Prima noastră plimbare de mână lungă prin parc",
        message: "Ziua 3 - Fiecare pas alături de tine este o aventură pe care o iubesc.",
        task: "Facem o plimbare romantică în aer liber."
    },
    4: {
        image: "https://images.unsplash.com/photo-1522673607177-f9e6e4914c49?w=800",
        memory: "Când am descoperit pasiunea noastră comună",
        message: "Ziua 4 - Cu tine, fiecare experiență devine o amintire prețioasă.",
        task: "Pregătim cina împreună astăzi!"
    },
    5: {
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        memory: "Acel apus de soare magic pe care l-am privit împreună",
        message: "Ziua 5 - Tu ești cel mai frumos cadou pe care viața mi l-a oferit.",
        task: "Privim împreună stelele în seara asta."
    },
    6: {
        image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800",
        memory: "Momentul când mi-ai spus pentru prima dată că mă iubești",
        message: "Ziua 6 - Dragostea ta mă face să fiu o persoană mai bună în fiecare zi.",
        task: "Îți spun 10 lucruri pe care le iubesc la tine."
    },
    7: {
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800",
        memory: "Primul nostru Crăciun împreună",
        message: "Ziua 7 - Îmi place cum râzi și cum îmi luminezi ziua.",
        task: "Seara asta bem vin fiert împreună!"
    },
    8: {
        image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800",
        memory: "Când am dansat împreună prima dată",
        message: "Ziua 8 - În brațele tale am găsit căminul meu.",
        task: "Dansăm pe melodia noastră preferată."
    },
    9: {
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        memory: "Acea surpriză pe care mi-ai făcut-o",
        message: "Ziua 9 - Fiecare zi cu tine este o binecuvântare.",
        task: "Îți fac o surpriză mică astăzi!"
    },
    10: {
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
        memory: "Când am stat treji toată noaptea vorbind",
        message: "Ziua 10 - Conversațiile noastre sunt cele mai prețioase momente.",
        task: "Ne facem timp pentru o discuție sinceră în seara asta."
    },
    11: {
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        memory: "Prima noastră aventură împreună",
        message: "Ziua 11 - Cu tine, fiecare clipă devine o poveste de neuitat.",
        task: "Planificăm următoarea noastră aventură!"
    },
    12: {
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        memory: "Când m-ai îmbrățișat și totul a devenit bine",
        message: "Ziua 12 - Îmbrățișările tale sunt remediul meu pentru orice zi grea.",
        task: "Astăzi îți dau cele mai lungi îmbrățișări!"
    },
    13: {
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800",
        memory: "Acel moment spontan care ne-a făcut să râdem",
        message: "Ziua 13 - Spontaneitatea ta aduce culoare în viața mea.",
        task: "Facem ceva spontan și nebunesc astăzi!"
    },
    14: {
        image: "https://images.unsplash.com/photo-1522673607177-f9e6e4914c49?w=800",
        memory: "Când am gătit împreună pentru prima dată",
        message: "Ziua 14 - Tot ce facem împreună devine special.",
        task: "Pregătim desert împreună!"
    },
    15: {
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        memory: "Prima ta vizită la familia mea",
        message: "Ziua 15 - Te-ai integrat perfect în viața mea și în inima mea.",
        task: "Povestim despre viitorul nostru împreună."
    },
    16: {
        image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=800",
        memory: "Când am făcut planuri mari pentru viitor",
        message: "Ziua 16 - Viitorul alături de tine este tot ce îmi doresc.",
        task: "Scriem împreună 5 obiective pentru anul viitor."
    },
    17: {
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800",
        memory: "Acea zi când m-ai surprins cu gesturi mici",
        message: "Ziua 17 - Gesturile tale mici înseamnă totul pentru mine.",
        task: "Îți fac un masaj relaxant astăzi!"
    },
    18: {
        image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800",
        memory: "Când am petrecut toată ziua în pat vorbind și râzând",
        message: "Ziua 18 - Timpul petrecut cu tine nu este niciodată suficient.",
        task: "Ziua de relax totală - facem ce ne place!"
    },
    19: {
        image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800",
        memory: "Prima vacanță împreună",
        message: "Ziua 19 - Fiecare călătorie cu tine este o poveste de dragoste.",
        task: "Alegem destinația pentru următoarea vacanță!"
    },
    20: {
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
        memory: "Când m-ai ascultat cu răbdare",
        message: "Ziua 20 - Mulțumesc că mă asculți și mă înțelegi întotdeauna.",
        task: "Astăzi te ascult pe tine - spune-mi tot ce vrei!"
    },
    21: {
        image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        memory: "Acel moment când mi-ai citit gândurile",
        message: "Ziua 21 - Conexiunea noastră este specială și unică.",
        task: "Jucăm un joc împreună în seara asta!"
    },
    22: {
        image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800",
        memory: "Când am făcut decorațiuni de Crăciun împreună",
        message: "Ziua 22 - Tradițiile noastre sunt cele mai frumoase amintiri.",
        task: "Bem ciocolată caldă cu bezele!"
    },
    23: {
        image: "https://images.unsplash.com/photo-1522673607177-f9e6e4914c49?w=800",
        memory: "Ultima noastră aventură memorabilă",
        message: "Ziua 23 - Fiecare zi cu tine este o aventură minunată.",
        task: "Facem planuri pentru Ajun și Crăciun!"
    },
    24: {
        image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800",
        memory: "Toate momentele frumoase petrecute împreună",
        message: "Ziua 24 - Mâine este ziua specială... dar tu ești special(ă) în fiecare zi!",
        task: "Ne pregătim împreună pentru cea mai frumoasă zi!"
    },
    25: {
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
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