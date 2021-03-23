

var propMenu = {

    burguerMenu: document.getElementById('burger_menu'),
    slideMenu:$('slideMenu'),
    menu_activo: false, 
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a'),
    main_section:document.getElementById('main')
}


var metMenu = {
    inicio: function(){
        propMenu.burguerMenu.addEventListener('click', metMenu.toggleMenu);
    },
    toggleMenu: function(){
        
         if(propMenu.menu_activo == false){
            propMenu.menu_activo=true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
            propMenu.main_section.addEventListener('click', metMenu.ocultarMenu);
        } else {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        } 
    },

    ocultarMenu:function(){
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    }
}

metMenu.inicio();
