const txtBinary = document.getElementById('bin')
const output = document.getElementById('res')

function convert() {
    let valor = (txtBinary).value
    if (valor != "") {
        valor.split('').map((char) => {
            if (char !== '0' && char !== '1') {
                Toast.show('Por favor digite números binários, Ex:10101', 'error')
            } else {
                output.innerHTML = `${parseInt(valor, 2)}`
            }
        })
        txtBinary.innerHTML = ``
    } else {
        output.innerHTML = `0`
    }
}

txtBinary.addEventListener('keyup', e => {
    convert()
});