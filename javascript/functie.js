var rezultat1, rezultat2, rezultat3

function Inmultire (argument1, argument2){
    return argument1*argument2
}

function ScadereaAdunarii (argument1, argument2, argument3){
    return argument1 + argument2 - argument3
}

function ATreiaFunctie (argument1, argument2){
    return ScadereaAdunarii(argument1, argument2, Inmultire(argument1, argument2))
}

rezultat1 = ATreiaFunctie(7,1)

rezultat2 = ATreiaFunctie(14,6)

rezultat3 = ATreiaFunctie(2,20)