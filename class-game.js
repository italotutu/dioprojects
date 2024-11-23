class hero {
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atacar(){
        let atack;
        if(this.type === "mago"){
           atack = "usou magia";
        }else if (this.type === "guerreiro"){
            atack = "espada";
        }else if (this.type === "monge"){
            atack = "artes marciais";
        }else if (this.type === "ninja"){
            atack = "shuriken";
        }
        return atack; 
    } 
    escrever(){
        console.log(`o ${this.type} atacou usando ${this.atacar()}`)
    }
}

let heroi = new hero("italo",27,"guerreiro")

heroi.escrever()