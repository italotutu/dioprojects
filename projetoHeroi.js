const nome = "Heitor"
const xp = 200;

switch (true) {
    case (xp <= 1000):
        console.log("O Herói " + nome + " está no nível ferro level " + xp);
        break;
    case (xp > 1000 && xp <= 2000):
        console.log("O Herói " + nome + " está no nível bronze level " + xp);
        break;
    case (xp > 2000 && xp <= 5000):
        console.log ("O Herói " + nome + " está no nível ouro level " + xp);
        break;
    case (xp > 5000 && xp <= 8000):
        console.log("O Herói " + nome + " está no nível Platina Diamentelevel " + xp);
        break;
    case (xp > 8000 && xp <= 9000):
        console.log("O Herói " + nome + " está no nível Ascendente " + xp);
        break;
    case (xp > 9000 && xp <= 10000):
        console.log("O Herói " + nome + " está no nível Imortal " + xp);
        break;
    case(xp >= 10000):
        console.log("O Herói " + nome + " está no nível Radiante " + xp);
        break;
    default:
        console.log("Outro nível");
}