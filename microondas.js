//Locad de seleção
const comida = "pipoca";
const tempo = 11;


switch(comida){
    case "pipoca":
            if(tempo<10){
                console.log("tempo insuficiente");
            } else if (tempo==10){
                console.log("tempo Certinho, agora siga meu cachorro @dukemeuduque");
            } else if (tempo>=20 && tempo<30){
                console.log("Seu prato queimou");
            }else if (tempo>=30){
                console.log("Kabumm");
            }
        break;  

     case "macarrão":
            if(tempo<8){
                console.log("tempo insuficiente");
            } else if (tempo==8){
                console.log("tempo Certinho, agora dançe");
            } else if (tempo>=16 && tempo<24){
                console.log("Seu prato queimou");
            }else if(tempo>=24){
                console.log("Kabumm");
            }
        break; 
        
        case "carne":
            if(tempo<15){
                console.log("tempo insuficiente");
            } else if (tempo==15){
                console.log("tempo Certinho, agora me mande um ifood");
            } else if (tempo>=30 && tempo<45){
                console.log("Seu prato queimou");
            }else if(tempo>=45){
                console.log("Kabumm");
            }
        break;  

        case "feijão":
            if(tempo<12){
                console.log("tempo insuficiente");
            } else if (tempo==12){
                console.log("tempo Certinho, agora dê um sorriso");
            } else if (tempo>=24 && tempo<36){
                console.log("Seu prato queimou");
            }else if (tempo>=36) {
                console.log("Kabumm");
            }
        break; 
        
        case "brigadeiro":
            if(tempo<8){
                console.log("tempo insuficiente");
            } else if (tempo==8){
                console.log("tempo Certinho, agora me faça um pix");
            } else if (tempo>=16 && tempo<24){
                console.log("Seu prato queimou");
            }else if (tempo>=24){
                console.log("Kabumm");
            }
        break; 

    default:
        console.log("Prato Inexistente");             
}

console.log("Prato pronto, bom apetite!!!");