/* Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.*/




const ilNome = nomeCompleto("Fabio", "Morrone")
console.log(ilNome);


function nomeCompleto(firstName, lastName){
    return {
        firstNam: firstName, 
        lastName: lastName
    }
}





module.exports = nomeCompleto
