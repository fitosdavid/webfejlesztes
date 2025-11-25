document.addEventListener('DOMContentLoaded', function() {
    
    const urlap = document.getElementById('quoteForm');

    if (urlap) {
        urlap.addEventListener('submit', function(event) {
            
            // MEGÁLLÍTJUK az alapértelmezett küldést, hogy előbb ellenőrizhessünk
            event.preventDefault();

            // Változó, ami figyeli, volt-e hiba
            let vanHiba = false;

            const nevMezo = document.getElementById('fullname');
            const nevHiba = document.getElementById('nameError');
            
            // Ha üres, vagy kevesebb mint 5 karakter (pl. nem teljes név)
            if (nevMezo.value.length < 5) {
                nevHiba.innerText = "Kérlek, add meg a teljes nevedet!";      /* text content = inner text*/ 
                vanHiba = true;
            } else {
                nevHiba.innerText = ""; // Töröljük a hibaüzenetet, ha jó
            }

            const emailMezo = document.getElementById('email');
            const emailHiba = document.getElementById('emailError');
            
            if (!emailMezo.value.includes('@') || !emailMezo.value.includes('.')) {
                emailHiba.textContent = "Kérlek, érvényes email címet adj meg!";
                vanHiba = true;
            } else {
                emailHiba.textContent = "";         //Ilyenkor a hibamezőt lenullázom//
            }

            const datumMezo = document.getElementById('startDate');

            const valasztottDatum = new Date(datumMezo.value);
            const maiDatum = new Date();        // akt. datum felvetele
            // A mai nap óra/percét nullázzuk a korrekt összehasonlításhoz
            maiDatum.setHours(0,0,0,0);

            if (valasztottDatum < maiDatum) {
                alert("A kezdés dátuma nem lehet a múltban!");
                vanHiba = true;
            }

            if (vanHiba === false) {
                alert("Sikeres ajánlatkérés! Hamarosan keresünk.");
                urlap.reset();
            }
        });
    }
});