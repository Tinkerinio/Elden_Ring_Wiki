//Array of bosses
const bosses = ["godfrey", "malenia", "godrick", "morgott", "rennala", "margit"];

//Using map() to capitalize names
const capitalizedNames = bosses.map(boss => boss.charAt(0).toUpperCase() + boss.slice(1));

//Loop through the array and display each boss
let listHTML = '';
for (let i = 0; i < capitalizedNames.length; i++) {
    listHTML += `<li>${capitalizedNames[i]}</li>`;
}

document.getElementById('bossesList').innerHTML = listHTML;