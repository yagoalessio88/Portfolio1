

//funcion que verifica se introduzca nombre y apellido en formulario

function verifica_nombre(){
    let pos = $('inputName').value.indexOf(" ");
    if((pos-1 == " ") || (pos+1 ==" "))
    alert("Ingresa Nombre y Apellido separado por un espacio!");
};

function verifica_calle(){
  let string= $('inputCalle').value;
  
  for(let i=0; i<string.length; i++){
    if(isNaN(string[i]) == false){
        alert("No ingreses numeros!");
        break;
    }
  }
};


function desplega_capa(n){
    switch(n){
        case 1:
            let obj=new Effect.SlideDown('entrega-dom',{duration:1 });
            break;
        case 2:
            let obj1=new Effect.SlideDown('retira',{duration:1 });
            break; 
        case 3:
            let obj2=new Effect.SlideDown('expl1',{duration:1 });
            break; 
        case 4:
            let obj3=new Effect.SlideDown('expl2',{duration:1 });
            break; 
    };
};
 
function oculta_capa(n){
    switch(n){
        case 1:
            $('entrega-dom').style.display="none";
            break;
        case 2:
            $('retira').style.display="none";
            break;
        case 3:
            $('expl1').style.display="none";
            break;  
        case 4:
            $('expl2').style.display="none";
            break;  
    }
}; 






