ranks(100,25)

function ranks(vitoria, derrota){
    
    let saldo = vitoria - derrota
    
    if (saldo < 11) {
        nivel = "ferro";
    } else if (saldo > 11 && saldo <= 20) {
        nivel = "bronze";
    } else if (saldo > 21 && saldo <= 50) {
        nivel = "prata";
    } else if(saldo > 51 && saldo <= 80){
        nivel = "ouro";
    }else if(saldo > 81 && saldo <= 90){
        nivel = "diamante";
    }else if (saldo > 91 && saldo <= 100){
        console.log("lendario")
    }else {
        console.log("Imortal");
    }
    console.log("o heroí tem de saldo de "+ saldo + " está no nivel de " + nivel)
}
