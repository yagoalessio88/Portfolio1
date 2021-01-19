(function(){



//Productos
const productos = [
    {nombre:"Lechuga", precio:1.00, descripcion:"Variedad de estación."},
    {nombre:"Tomate", precio:2.00, descripcion:"Fresco de huerta orgánica local."},
    {nombre:"Papa", precio:1.50, descripcion:"Orgánica. Lavada."},
    {nombre:"Naranja", precio:2.50, descripcion:"Orgánicas, especiales para jugo."},
    {nombre:"Cebolla", precio:2.00, descripcion:"Blancas de tamaño medio."},
    {nombre:"Zanahoria", precio:1.45, descripcion:"Orgánicas de tamaño medio."}
];



var propiedadesStore = {
    productosImag: document.querySelectorAll('.capamover'),

    botonesAgrega: document.querySelectorAll('.botonAgrega'),

    productoId: null
    
}

var methStore = {

    inicio: function(){
        //ciclo forEach que crea event listeners para cada elemento en 
        //almacenado en productoImag
        propiedadesStore.productosImag.forEach(producto => {
        producto.addEventListener('mouseover', methStore.describeProducto)

        producto.addEventListener('mouseout',methStore.borraDescripcion)
        })

        propiedadesStore.botonesAgrega.forEach(boton => {
            boton.addEventListener('touchend',methStore.agregaProducto)
        })

    },

    describeProducto:function(){
        //función que mostrará la descripcion del producto

        //extraemos el ultimo numero dentro del id del elemento
        let i = this.id.substr(4,5);
        
        //utilizamos este numero como index para acceder al array con productos
        //y pasamos los datos a los contenedores que los mostrarán
        $('d-p-n').innerHTML=productos[i].nombre;
        $('d-p-d').innerHTML=productos[i].descripcion;
        $('d-p-p').innerHTML=productos[i].precio.toFixed(2)+"&euro; el Kg";
    },

    borraDescripcion:function(){
        //función que devolverá el texto con indicaciones al usuario

        //agregamos el texto indicativo en el contenedor
        //central y borramos el contenido de los demás contenedores
        $('d-p-n').innerHTML=" ";
        $('d-p-d').innerHTML="<small>Posiciona el mouse sobre un producto para ver detalles</small>";
        $('d-p-p').innerHTML=" ";
    },

    agregaProducto:function(id){

    let i=id.charAt(4);
    let cantidad=prompt("Que cantidad en kg deseas comprar? ej: 1.5kg, 0.5kg?","1"); //solicitamos cantidad al usuario
    let totalProd=parseInt(cantidad) * productos[i].precio; //calculamos el valor de la orden    

    let agrProd=document.createElement('div');
    agrProd.setAttribute('id','producto'+i);
    let boton=document.createElement('input');
    boton.type="button"; //asignamos el tipo botón
    boton.value="Eliminar"; //asignamos el value al botón
    boton.setAttribute('id', 'B'+i); //asignamos un id único al botón compuesto de "B" mas index
    boton.setAttribute('class', 'btn btn-danger'); //creamos clase para boton
    boton.addEventListener('click', methStore.eliminarProducto);
   
    
    agrProd.innerHTML=`${productos[i].nombre} x ${cantidad}kg   Total: ${totalProd}&euro;`;//agregamos texto con detalles de la orden
    $('mi-compra').appendChild(agrProd); //agregamos el nuevo contenedor con la orden
    agrProd.appendChild(boton); //agregamos el botón al divisor de la orden   
    
    let totalComp=$('total'); //obtenemos contenedor que muestra valor total de la compra 
    let totalAct=parseFloat(totalComp.innerHTML.substring(6,11))+totalProd; //sumamos el valor total actual mas el del producto que se suma
    totalComp.innerHTML=`Total:${totalAct}&euro;` //actualizamos el valor del total
    }, 

    eliminarProducto:function(){
    let i = this.id.charAt(1);
    let articulo=$(`producto${i}`);//obtenemos el id del contenedor 
    articulo.remove(); //removemos el contenedor
    let busca=articulo.innerHTML.search("Total:");
    let valor=parseFloat(articulo.innerHTML.substring(busca+6,busca+11));
    
    let totalComp=$('total'); //obtenemos contenedor que muestra valor total de la compra 
    let totalAct=parseFloat(totalComp.innerHTML.substring(6,11))-valor; //restamos del valor total el valor del producto que se elimina
    if(totalAct==0)
        totalComp.innerHTML="Total:00.00&euro;"; //nos aseguramos que el valor en 0 siempre este en decimal flotante con dos decimales
    else
        totalComp.innerHTML=`Total:${totalAct.toFixed(2)}&euro;` //actualizamos el valor del total
    }
}


methStore.inicio();



/////drag and drop elements


//Definimos elementos de tipo Draggable (productos)

new Draggable('capa0',{revert:true});
new Draggable('capa1',{revert:true});
new Draggable('capa2',{revert:true});
new Draggable('capa3',{revert:true});
new Draggable('capa4',{revert:true});
new Draggable('capa5',{revert:true}); 

 //Definimos capa receptora (cesta de compra)
Droppables.add('receptor', {
    accept: 'capamover',
    hoverclass: 'cesta1',
    onDrop: function(arrastrado) {
        //al hacer drop de un producto sobre la cesta llamamos
        //a la función que agregará la información de dicho 
        //priducto a nuestra lista de compra
        //propiedadesStore.productoId=arrastrado.id;
        methStore.agregaProducto(arrastrado.id);
        
    }
}); 

}())

