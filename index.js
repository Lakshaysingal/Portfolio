function opentab(tabname) {
   var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-content");
 
   for (var i = 0; i < tablinks.length; i++) {
     tablinks[i].classList.remove("active-link");
   }
   for (var i = 0; i < tabcontents.length; i++) {
     tabcontents[i].classList.remove("active-tab");
   }
 
   document.getElementById(tabname).classList.add("active-tab");
   event.target.classList.add("active-link");
}

 
 
