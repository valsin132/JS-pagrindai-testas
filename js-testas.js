/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

let kursas1 = 1.0702
let skaicius1 = Math.ceil(Math.random() * 1000)
function eurai() {
    console.log(`${skaicius1} EUR yra lygu ${(skaicius1 * kursas1).toFixed(2)} USD`)
}
eurai()


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

let kursas2 = 0.9344
let skaicius2 = Math.ceil(Math.random() * 1000)
function doleriai() {
    console.log(`${skaicius2} USD yra lygu ${(skaicius2 * kursas2).toFixed(2)} EUR`)
}
doleriai()


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

let ugis = 1.8
let svoris = 80
let BMI = (svoris / (ugis**2)).toFixed(2)
console.log(`Ugis = ${ugis} m., svoris = ${svoris} kg.`)
console.log(`Žmogaus BMI = ${BMI}`)
if (BMI > 25) {
    console.log('Žmogus turi viršvorį')
} else if (BMI < 25 && BMI >= 18.5) {
    console.log('Žmogaus svoris yra normalus')
} else if (BMI < 18.5) {
    console.log('Per mažas svoris.')
}


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

let amzius = 30
let dienos = amzius * 365
let valandos = dienos * 24
let minutes = valandos * 60
let sekundes = minutes * 60
console.log(`Žmogaus amžius metais: ${amzius};
sekundėmis: ${sekundes};
minutėmis: ${minutes};
valandomis: ${valandos};
dienomis: ${dienos}.`)


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

let Farenheit1 = 68
let Celsius1 = ((Farenheit1 - 32) / 1.8).toFixed(1)
console.log(`${Farenheit1} °F yra lygu ${Celsius1} °C`)


let Celsius2 = 20
let Farenheit2 = (Celsius2 * 1.8 + 32).toFixed(1)
console.log(`${Celsius2} °C yra lygu ${Farenheit2} °F`)


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let skaiciai = []
for ( i = 1; i <= 10; i++) {
    skaiciai.push(i)
}
let sk = skaiciai.join('-')
console.log(sk)


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let n = 5
let string = ''
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
        string += '*'
    }
    string += "\n"
}
console.log(string)


/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

let data1 = new Date()
let data2 = new Date('Dec 25, 2023')

let x = Math.abs(data1 - data2) / 1000
let y = Math.floor(x / (60*60*24))
console.log(`Dabartinė data: ${data1}`)
console.log(`Kalėdos: ${data2}`)
console.log(`Iki Kalėdų liko: ${y} d.`)


/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = []
vardai.push('Tomas', 'Dainius', 'Paulius', 'Jonas')
let vardas1 = vardai.join(',')
console.log(vardas1)
let vardas2 = vardai.join('+')
console.log(vardas2)


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
let mazos = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let dideles = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let simboliai = ['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','|','[',']','{','}',';',':',',','<','.','>','/','?','`','"']

let slaptazodis = ''
for (i = 0; i < 3; i++) {
    let x = mazos[Math.floor(Math.random() * mazos.length)]
    slaptazodis += x
    let y = dideles[Math.floor(Math.random() * dideles.length)]
    slaptazodis += y
    let a = numbers[Math.floor(Math.random() * numbers.length)]
    slaptazodis += a
    let b = simboliai[Math.floor(Math.random() * simboliai.length)]
    slaptazodis += b
}
console.log(`Slaptažodis: ${slaptazodis}`)
