let availableKeywords = [
    'Lietuva',
    'Latvija',
    'Estija',
    'Vokietija',
    'Prancūzija',
    'Ispanija',
    'Norvegija',
    'Suomija',
    'Švedija',
    'Danija',
    'Indija',
    'Islandija',
    'Brazilija',
    'Japonija'
]


let resultsBox = document.querySelector('.result-box')
let inputBox = document.getElementById('salis')

inputBox.onkeyup = function() {
    let result = []
    let input = inputBox.value
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        })
    }
    display(result)

    if (!result.length) {
        resultsBox.innerHTML = ''
    }

}

function display(result){
    let content = result.map((list) => {
        return '<li onclick=pasirinktiInput(this)>' + list + '</li>' 
    })

    resultsBox.innerHTML = '<ul>' + content.join('<hr>') + '</ul>'
}

function pasirinktiInput(list) {
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = ''
}



let calculateButton = document.getElementById('skaiciuoti')
calculateButton.addEventListener('click', function() {
    let Tarifas = document.getElementById('tarifas').valueAsNumber
    let Dienos = document.getElementById('dienos').valueAsNumber

    let dienpinigiuSuma = Tarifas * Dienos

    console.log(dienpinigiuSuma)

    let rezultatas = document.querySelector('.input-4')
        if (Tarifas < 0) {
            rezultatas.innerHTML = `<input type="text" value="Klaida!" disabled="true">`
            alert('Įvestas neteisingas tarifas.')
        } else if (Dienos < 0) {
            rezultatas.innerHTML = `<input type="text" value="Klaida!" disabled="true">`
            alert('Įvestos neteisingos komandiruočių dienos.')
        } else {
            rezultatas.innerHTML = `<input type="text" value="${dienpinigiuSuma} €" disabled="true">`
        }
})



document.getElementById('delete').addEventListener('click', function() {
    document.querySelector('.input-2').innerHTML = '<input type="number" id="tarifas" min="0" step="1" placeholder="Tarifas €">'
    document.querySelector('.input-3').innerHTML = '<input type="number" id="dienos" min="0" step="1" placeholder="Komandiruočių dienos">'
    document.querySelector('.input-4').innerHTML = '<input type="number" id="suma" placeholder="Dienpinigių suma" disabled="true">'
})


document.getElementById('prideti').addEventListener('click', function() {
    
})








