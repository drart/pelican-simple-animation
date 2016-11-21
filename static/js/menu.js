var menumenu = function(){ 

    var menuitems = [];
    var categories = [];

    var mymenu = document.getElementById("menumenu");

    for(var i = 0; i < mymenu.children.length; i++){
        menuitems.push(mymenu.children[i]);

        // if this is a category then prevent link for now
        if(menuitems[i].getElementsByTagName('ul').length > 0) {

            //console.log(menuitems[i].firstChild);

            menuitems[i].firstChild.onclick = function(e){
                //console.log(e);
                e.preventDefault();
                e.stopPropagation();

                for (var xx = 0 ; xx < menuitems.length-1; xx++){
                   menuitems[xx].hidden = true; 
                }
                // reset the link 
                this.onclick = function(e){};
            };

            // hide submenus
            var xx = menuitems[i].getElementsByTagName('ul');
            for (var j = 0 ; j < xx.length; j++){
                xx[j].hidden = true; 
            }
        }
    };
    //console.log(menuitems.length);
};
