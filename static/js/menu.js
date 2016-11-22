var menumenu = function(){ 

    var menuitems = document.querySelectorAll('#menumenu > li:not(#blogtitle)');

    var bloglinks = document.querySelectorAll(".menu-category li");
    for (var i = 0; i < bloglinks.length; i++){
        bloglinks[i].hidden = true;
    }

    var blogcategories = document.querySelectorAll('#menu-categories > li');
    
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

    var tada =  document.querySelectorAll('.menu-category > a') ;
    for (var i = 0; i < tada.length; i++){
        tada[i].onclick = function(index){
            return function (e) {
                //console.log(index);
                e.preventDefault();
                e.stopPropagation();

                var mybloglinks = blogcategories[index].querySelectorAll('ul > li');
                //console.log(mybloglinks);

                for ( var j = 0; j < mybloglinks.length; j++){
                    mybloglinks[j].hidden = false;
                }

                for ( var k = 0; k < blogcategories.length; k++){
                    if (k !== index) {
                        blogcategories[k].hidden = true;
                    }else{
                        blogcategories[k].hidden = false;
                    }
                }
                this.onclick = function(e){};
            };
        }(i);
    }
};
