let naveName = prompt('Qual o nome da aeronave?')

let invertedName = ''

 for( i = naveName.length - 1; i >= 0; i--) {
    if(naveName[i] == 'e') {
        break
    }
    invertedName += naveName[i]
 }

 alert("O nome da nave é: " + naveName + '\nNome invertido (sem a letra (e)): ' + invertedName)