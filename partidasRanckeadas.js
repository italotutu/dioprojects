ranks(100,25)

function ranks(vitoria, derrota){
    
    let saldo = vitoria - derrota
    
    if (saldo < 11) {
        console.log("Ferro");
    } else if (saldo > 11 && saldo <= 20) {
        console.log("Bronze");
    } else if (saldo > 21 && saldo <= 50) {
        console.log("Prata");
    } else if(saldo > 51 && saldo <= 80){
        console.log("ouro")
    }else if(saldo > 81 && saldo <= 90){
        console.log("imortal")
    }else if (saldo > 91 && saldo <= 100){
        console.log("quase zerou")
    }else {
        console.log("Imortal");
    }
}