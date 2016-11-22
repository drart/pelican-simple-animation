var menumenu = function(){ 

    var menuitems = document.querySelectorAll('#menumenu > li:not(#blogtitle)');

    var bloglinks = document.querySelectorAll(".menu-category li");
    for (var i = 0; i < bloglinks.length; i++){
        bloglinks[i].hidden = true;
    }

    document.getElementById("menu-categories").hidden = true;

    document.getElementById('blogtitle').querySelector('a').onclick = function(e){
        e.preventDefault();
        e.stopPropagation();

        document.getElementById("menu-categories").hidden = false;
                
        for (var i = 0; i < menuitems.length; i++){
            menuitems[i].hidden = true; 
        }

        // reset the link 
        this.onclick = function(e){};
    };
};
