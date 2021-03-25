const txtBinary = document.getElementById('bin')
const output = document.getElementById('res')
function convert() {
    let valor = (txtBinary).value
    if (valor != ""){ 
        let bin = valor.split("") 
        let verificador = "true"

        if (txtBinary != 0){
            for (let i = 0; i < bin.length;i++){
                console.log(bin[i])
                if(bin[i] != 0 && bin[i] != 1){
                    verificador = "false"
                }
            }
            if (verificador == "true"){
                valor = parseInt(valor, 2)
                output.innerHTML = `${valor}`
            } else {
                Toast.show('Por favor digite números binários, Ex:10101','error')
            }
        } else {
        Toast.show('Porfavor insira um valor válido','error')
        }
        txtBinary.innerHTML = ``
    } else {
        output.innerHTML = `0`
    }
    
}

txtBinary.addEventListener('keyup', e => {
    convert()
});