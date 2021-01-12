//Productos
const productos = [
    {nombre:"Lechuga", precio:1.00, descripcion:"Variedad de estación."},
    {nombre:"Tomate", precio:2.00, descripcion:"Fresco de huerta orgánica local."},
    {nombre:"Papa", precio:1.50, descripcion:"Orgánica. Lavada."},
    {nombre:"Naranja", precio:2.50, descripcion:"Orgánicas, especiales para jugo."},
    {nombre:"Cebolla", precio:2.00, descripcion:"Blancas de tamaño medio."},
    {nombre:"Zanahoria", precio:1.45, descripcion:"Orgánicas de tamaño medio."}
];



//función que muestra la información de cada producto
function describe_producto(num){
    //asigna propiedades del producto desde el array "productos"
    //y lo asigna a los contenedores correspondientes en el html
    $('d-p-n').innerHTML=productos[num].nombre;
    $('d-p-d').innerHTML=productos[num].descripcion;
    $('d-p-p').innerHTML=productos[num].precio.toFixed(2)+"&euro; el Kg";

};

//función que borra el contenido descriptivo del producto
function borra_descripcion(){
    $('d-p-n').innerHTML=" ";
    $('d-p-d').innerHTML="<small>Posiciona el mouse sobre el producto para ver detalles</small>";
    $('d-p-p').innerHTML=" ";
};

//función que agrega productos a la cesta de compra
function agrega_producto(id){
    let i=id.charAt(4);
    let cantidad=prompt("Que cantidad en kg deseas comprar? ej: 1.5kg, 0.5kg?","1"); //solicitamos cantidad al usuario
    let totalProd=parseInt(cantidad) * productos[i].precio; //calculamos el valor de la orden  

    let agrProd=document.createElement('div'); //crea divisor que contendra el producto agregado
    agrProd.id="producto"+i; //asignamos un id unico al divisor
    let boton=document.createElement('input'); //crea un input para el divisor que será un botón
    boton.type="button"; //asignamos el tipo botón
    boton.value="Eliminar"; //asignamos el value al botón
    boton.id="B"+i; //asignamos un id único al botón compuesto de "B" mas index
    let clase=document.createAttribute('class'); //creamos clase para boton
    clase.value="btn btn-danger"; //asignamos value una clase de bootstrap para estilo
    boton.setAttributeNode(clase); //asignamos la clase al boton
    let attr=document.createAttribute('onclick'); //creamos evento para el boton
    attr.value=`borrar_articulo(${i})` //asignamos la funcion para el evento
    boton.setAttributeNode(attr); //agregamos el atributo 
   
    
    agrProd.innerHTML=`${productos[i].nombre} x ${cantidad}kg   Total: ${totalProd}&euro;`;//agregamos texto con detalles de la orden
    $('mi-compra').appendChild(agrProd); //agregamos el nuevo contenedor con la orden
    agrProd.appendChild(boton); //agregamos el botón al divisor de la orden   
    
    let totalComp=$('total'); //obtenemos contenedor que muestra valor total de la compra 
    let totalAct=parseFloat(totalComp.innerHTML.substring(6,11))+totalProd; //sumamos el valor total actual mas el del producto que se suma
    totalComp.innerHTML=`Total:${totalAct}&euro;` //actualizamos el valor del total
};


//funcion que borra un articulo de la lista de compras
function borrar_articulo(num){
    let articulo=$(`producto${num}`);//obtenemos el id del contenedor 
    articulo.remove(); //removemos el contenedor
    let busca=articulo.innerHTML.search("Total:");
    let valor=parseFloat(articulo.innerHTML.substring(busca+6,busca+11));
    
    let totalComp=$('total'); //obtenemos contenedor que muestra valor total de la compra 
    let totalAct=parseFloat(totalComp.innerHTML.substring(6,11))-valor; //restamos del valor total el valor del producto que se elimina
    if(totalAct==0)
        totalComp.innerHTML="Total:00.00&euro;"; //nos aseguramos que el valor en 0 siempre este en decimal flotante con dos decimales
    else
        totalComp.innerHTML=`Total:${totalAct.toFixed(2)}&euro;` //actualizamos el valor del total
};


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




