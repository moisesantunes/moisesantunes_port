function mdc(a,b){
    var max= Math.max(a,b);
    var min = Math.min(a,b);
    var maior =max;
    var menor = min;
    var resto;
    //console.log(max)
    var div=[];
    while(resto !=0){
        resto = maior % menor;
        console.log(resto)
        maior= menor;
        menor = resto;
        div.push(resto)
        
    }
    return resto;
    console.log(div)
}
mdc(48,30)