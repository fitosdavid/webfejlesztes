document.addEventListener('DOMContentLoaded', function() {              
    
    const szamoloGomb = document.getElementById('calcButton');
    if (szamoloGomb) {
        szamoloGomb.addEventListener('click', festekSzamolas);
    }
});
   
function festekSzamolas() {
    // parseFloat: számmá alakítás (.value - szöveg)
    let szelesseg = parseFloat(document.getElementById('wallWidth').value);
    let magassag = parseFloat(document.getElementById('wallHeight').value);
    
    let retegek = parseInt(document.getElementById('layers').value);

    if (isNaN(szelesseg) || isNaN(magassag) || szelesseg <= 0 || magassag <= 0) {
        alert("Kérlek, adj meg érvényes pozitív számokat a méretekhez!");
        return; 
    }

    let falfelulet = szelesseg * magassag;

    // 1 liter festék 10 négyzetméterre elég (egy rétegben)
    const kiadossag = 10; 

    let szuksegesFestek = (falfelulet / kiadossag) * retegek;

    // Ráhaygás: +10% rászámolása a biztonság kedvéért
    szuksegesFestek = szuksegesFestek * 1.1;

    let eredmenySzoveg = `A ${retegek} rétegű festéshez kb. <strong>${szuksegesFestek.toFixed(2)} liter</strong> festékre lesz szükség (+10% ráhagyással).`;

    // Rejtett doboz megjelenítése
    let eredmenyDoboz = document.getElementById('resultArea');
    let szovegHelye = document.getElementById('resultText');
    
    // Láthatóvá tesszük a dobozt
    eredmenyDoboz.style.display = "block"; 

    // Beírjuk a szöveget (innerHTML segítségével)
    szovegHelye.innerHTML = eredmenySzoveg; 
}