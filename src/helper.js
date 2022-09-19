export function cacularTotal(cantidad,plazo){

    let Totalcantidad;
    if(cantidad <=1000){
        Totalcantidad = cantidad *.25;
    }else if(cantidad > 1000 && cantidad <= 5000){
        Totalcantidad = cantidad *.20;
    }else if(cantidad >5000 && cantidad <= 10000){
        Totalcantidad = cantidad *.15;
    }else{
        Totalcantidad = cantidad *.10;
    }

    let totalPlazo = 0

    switch(plazo){
        case 3:
            totalPlazo= cantidad *.05;
            break;
        case 6:
            totalPlazo= cantidad *.10;
            break;
        case 12:
            totalPlazo= cantidad *.15;
            break;
        case 24:
            totalPlazo= cantidad *.20;
            break;
        default:
            break;    
    }

    return totalPlazo + Totalcantidad +cantidad
}


export function test(papa="hola papa"){
    console.log(papa);
}